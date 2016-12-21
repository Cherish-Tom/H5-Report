import React, {Component} from 'react';
import Template from './template';
import {BASIC_URL} from '../../constants/Config'
import {AppBar,IconButton,List,ListItem,Subheader} from 'material-ui';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Picklist from '../public/Picklist'
import Alert from './Alert';
import Loading from './Loading'
import fetch from 'isomorphic-fetch'
const styles={
    head: {
        textAlign: 'center',
        height: 45,
        lineHeight: '45px',
        backgroundColor:'rgb(255, 255, 255)',
        position: 'fixed'
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
    sub:{
        lineHeight: '30px',
        paddingLeft: 0
    },
    chevron:{
        margin: '10px 0',
        width: 20,
        height: 20
    }
}
class Fastnew extends Component {
    constructor(props, context){
        super(props, context);
        this.props.fetchMoudle(this.props.location.query.mode, 'quick_create')
        this.state = {
            open: false,
        }
        this.toogleOpen = () => {
            this.setState({open: true})
        }
        this.handleClose = () => {
            this.setState({open: false})
        }
        this.handleSubmit = (event) => {
            const path = this.props.location.pathname.replace('/fastnew', '')
            fetch(`${BASIC_URL}${path}`, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify({
                    'rating': '潜在客户',
                    'leadsource': '电话来访'
                })
            })
            this.setState({open: false})
            event.preventDefault()
        }
    }
    render(){
        const data = this.props.state.data.data
        const layout = []
        for(let attr in data){
            if( attr !== 'pick_list'){
                layout.push(
                    <div key={attr}>
                        <Subheader style={styles.sub}>{data[attr].blocklabel}</Subheader>
                        <div className='basic-msg'>
                            {data[attr].fields instanceof Array && data[attr].fields.map((field, index) => {
                                switch(field.uitype){
                                    case '53':
                                        return <div className='list-item' key={index}>
                                                    <label>{field.fieldlabel}:</label>
                                                    <span>{field.tablename}</span>
                                                </div>
                                        break;
                                    case '15':
                                        return  <div className='list-item' key={index}>
                                                    <label>{field.fieldlabel}:</label>
                                                    <div>
                                                        <Picklist list={data.pick_list[field.fieldname]} value='--无--' {...field}/>
                                                        <ChevronRight color='#6d6c6c' style={styles.chevron}/>
                                                    </div>
                                                </div>
                                        break;
                                    default:
                                        return  <div className='list-item' key={index}>
                                                    <label>{field.fieldlabel}:</label>
                                                    <span>{field.tablename}</span>
                                                </div>
                                }
                            })}
                        </div>
                    </div>
                )
            }
        }
        return (
            <div>
                <AppBar
                    style={styles.head}
                    titleStyle={styles.title}
                    title='快速创建'
                    iconStyleRight={{marginTop: 0}}
                    iconStyleLeft={{marginTop: 0, marginRight: 0}}
                    iconElementLeft={<div onTouchTap={this.context.router.goBack} style={styles.edit}>取消</div>}
                    iconElementRight={<div style={styles.edit} onTouchTap={this.toogleOpen}>确认</div>}
                />
                <div style={{padding: '45px 6px 0 6px'}}>
                    {
                        this.props.state.isFetching ? <Loading /> :
                        <form onSubmit={this.handleSubmit}>
                            {layout}
                        </form>
                    }
                </div>
                <Alert onSubmit={this.handleSubmit} open={this.state.open} handleClose={this.handleClose}/>
            </div>
        )
    }
}
Fastnew.contextTypes = {
    router: React.PropTypes.object
}
export default Template({
    component: Fastnew
});
