import React, { Component } from 'react';
import Header from './Header';
import 'whatwg-fetch';
import Subheader from 'material-ui/Subheader';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Template from './template';
import IconButton from 'material-ui/IconButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import DatePicker from 'material-ui/DatePicker';
import { BASIC_URL } from '../../constants/Config';
import Picklist from '../public/Picklist';
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
                        <Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link> :
                        <div style={styles.edit}>取消</div>
                    }
                iconElementRight={this.context.disable ?
                        <IconButton onClick={this.props.onClick}><ExitToApp color="#5e95c9"/></IconButton> :
                        <div onClick={this.props.onClick} style={styles.edit}>保存</div>
                }
            />
        )
    }
}
Head.contextTypes = {
    disable: React.PropTypes.bool.isRequired
}
const changeTopic = {};
class Details extends Component {
    constructor(props, context){
        super(props, context);
        this.props.fetchPost('customer', this.props.params.id)
        this.state = {
            data: {},
            disable: true,
            typeList: {}
        }
        this.handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            changeTopic[name] = value;
            this.setState({topic: changeTopic})
        }
        this.editChange = (event) => {
            this.setState({disable: !this.state.disable})
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
    componentWillMount(){
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
            disable: this.state.disable
        }
    }
    render() {
        let layout = [];
        const data = this.state.data;
        const typeList = this.state.typeList;
        for(let key in typeList){
            layout.push
            (
                <div key={key}>
                    <Subheader style={styles.sub}>{typeList[key].blocklabel}</Subheader>
                    <div className='basic-msg'>
                        <ul>
                            {typeList[key].fields.map((field, index) => {
                                if(field.fieldtype === 'picklist'){
                                    return  <li key={index}>
                                                <label>{field.fieldlabel}：</label>
                                                { data.extra[field.fieldname] ? <Picklist list={data.extra[field.fieldname]} {...field} value={data[field.fieldname]}/> : <span name={field.fieldname}></span>}
                                            </li>
                                } else if(field.fieldtype='reference'){
                                    return  <li key={index}>
                                                <label>{field.fieldlabel}：</label>
                                                <span name={field.fieldname}>{data[field.fieldname]}</span>
                                            </li>
                                } else {
                                    return  <li key={index}>
                                                <label>{field.fieldlabel}：</label>
                                                <input type='text' value={data[field.fieldname]} onChange={this.handleChange} name={field.fieldname}/>
                                            </li>
                                }
                            })}
                        </ul>
                    </div>
                </div>
            )

        }
        return (
            <div>
                <div className="fiexded">
                    <Head onClick={this.editChange}/>
                </div>
                <div style={{padding: '45px 6px 0 6px'}} >
                    <form onSubmit={this.hanleSubmit} >
                        {layout}
                    </form>
                </div>
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
