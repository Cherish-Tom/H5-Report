import React, { Component } from 'react';
import Header from './Header';
import 'whatwg-fetch';
import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Template from './template';
import IconButton from 'material-ui/IconButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { BASIC_URL } from '../../constants/Config';
import Picklist from './Picklist';
import DatePick from './DatePick';
import Alert from './Alert';
import Loading from './Loading';
const styles = {
    sub: {
        lineHeight: '30px',
        paddingLeft: 0
    },
    head: {
        textAlign: 'center',
        height: 45,
        lineHeight: '45px',
        backgroundColor:'rgb(255, 255, 255)'
    },
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial',
        color: 'rgb(33, 33, 33)',
        fontSize: 18
    },
    edit: {
        height: 45,
        lineHeight: '45px',
        color: 'rgb(94, 149, 201)',
        width: 48,
        fontSize: 14
    },
    disable: {
        color: 'rgba(0, 0, 0, 0.5)'
    }
}
class Head extends Component {
    constructor(props, context){
        super(props, context)
    }
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title='客户详情'
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0, marginRight: 0}}
                iconElementLeft={this.context.disable ?
                        <div style={styles.edit}>取消</div> :
                        <IconButton onTouchTap={this.context.router.goBack}><ArrowBaclIcon color="#5e95c9"/></IconButton>
                    }
                iconElementRight={this.context.disable ?
                        <div onClick={this.props.onSave} style={styles.edit}>保存</div> :
                        <IconButton onTouchTap={this.props.editChange}><ExitToApp color="#5e95c9"/></IconButton>
                }
            />
        )
    }
}
Head.contextTypes = {
    disable: React.PropTypes.bool.isRequired,
    router: React.PropTypes.object
}
const changeTopic = {};
class Details extends Component {
    constructor(props, context){
        super(props, context);
        this.props.fetchPost('customer', this.props.params.id)
        this.state = {
            data: {},
            disable: false,
            typeList: {},
            open: false
        }
        this.handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            changeTopic[name] = value;
            this.setState({data: Object.assign({}, this.state.data, changeTopic)})
        }
        this.editChange = (event) => {
            this.setState({disable: !this.state.disable})
            event.stopPropagation();
            event.preventDefault();
        }
        this.handleSave = (event) => {
            this.setState({open: true})
            event.stopPropagation();
            event.preventDefault();
        }
        this.hanleSubmit = (event) => {
            event.preventDefault();
            let form = document.querySelector('form');
            let path = window.location.pathname;
            fetch(`${BASIC_URL}/${path}`, {
                method: 'POST',
                body: new FormData(form)
            })
        }
    }
    componentDidMount(){
        fetch(`http://192.168.123.162/oa/modules/6`)
        .then(response => {
            if(response.ok){
                response.json().then(json => this.setState({typeList: json.data}))
            } else {
                console.log(response.status);
            }
        })
        .catch(error => console.log(error));
    }
    componentWillReceiveProps(nextProps){
        this.state.data = nextProps.state.data.data;
    }
    getChildContext() {
        return {
            disable: this.state.disable,
        }
    }
    render() {
        let layout = [];
        const {data, typeList, disable, open} = this.state;
        for(let key in typeList){
            layout.push
            (
                <div key={key}>
                    <Subheader style={styles.sub}>{typeList[key].blocklabel}</Subheader>
                    <div className='basic-msg'>
                            {typeList[key].fields.map((field, index) => {
                                if(field.fieldtype === 'picklist'){
                                    return  <div key={index} className='list-item'>
                                                <label>{field.fieldlabel}：</label>
                                                { data.pick_list[field.fieldname] ? <Picklist list={data.pick_list[field.fieldname]} {...field} value={data[field.fieldname]}/> : <span name={field.fieldname} data-type={field.fieldtype}></span>}
                                            </div>
                                } else if(field.fieldtype === 'reference'){
                                    return  <div key={index} className='list-item'>
                                                <label>{field.fieldlabel}：</label>
                                                <span name={field.fieldname} data-type={field.fieldtype}>{data[field.fieldname]}</span>
                                            </div>
                                } else if (field.fieldtype === 'data'){
                                    return <div key={index} className='list-item'>
                                                <label>{field.fieldlabel}：</label>
                                                <DatePick date={new Date(data[field.fieldname])} name={field.fieldname} />
                                            </div>
                                } else {
                                    return  <div key={index} className='list-item'>
                                                <label>{field.fieldlabel}：</label>
                                                <input type='text'
                                                    value={data[field.fieldname] ? data[field.fieldname] : ''}
                                                    onChange={this.handleChange}
                                                    name={field.fieldname}
                                                    data-type={field.fieldtype}
                                                />
                                            </div>
                                }
                            })}
                    </div>
                </div>
            )

        }
        return (
            <div>
                <div className="fiexded">
                    <Head editChange={this.editChange} onSave={this.handleSave}/>
                </div>
                {
                    this.props.state.isFetching ? <Loading /> :
                    <div style={{padding: '45px 6px 0 6px'}} >
                        <form onSubmit={this.hanleSubmit} >
                            {layout}
                        </form>
                    </div>
                }
                <Alert open={open}/>
            </div>
        )
    }
}
Details.childContextTypes = {
    disable: React.PropTypes.bool.isRequired
}
export default Template({
    component: Details,
})
