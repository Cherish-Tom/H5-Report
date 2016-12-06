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
import Immutable from 'immutable';
import DatePicker from 'material-ui/DatePicker';
import { BASIC_URL } from '../../constants/Config';
const styles = {
    sub: {
        lineHeight: '30px',
        paddingLeft: 0
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.54)'
    },
    back:{
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 4,
        boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px'
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
        this.props.fetchTopic(this.props.params.id);
        this.state = {
            topic: {},
            disable: true
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

    getChildContext() {
        return {
            disable: this.state.disable
        }
    }
    render() {
        const topic = Object.assign({}, this.props.topic.data, this.state.topic);
        return (
            <div>
                <div className="fiexded">
                    <Head onClick={this.editChange}/>
                </div>
                <div style={{padding: '45px 6px 0 6px'}} >
                    <form onSubmit={this.hanleSubmit} >
                        <Subheader style={styles.sub}>基本信息</Subheader>
                        <div className='basic-msg'>
                            <ul>
                                <li>
                                    <label>网站:</label>
                                    <input type='text' value={topic.website} name='website'  placeholder='点击填写' onChange={this.handleChange}/>
                                </li>
                                <li>
                                    <span>客户编号:</span>
                                    <input type='text' value={topic.account_no}  name='account_no' disabled />
                                </li>
                                <li>
                                    <span>商户名称:</span>
                                    <input type='text' value={topic.accountname} name='accountname' onChange={this.handleChange}/>
                                </li>
                                <li>
                                    <span>所属行业:</span>
                                    <input type='text' value={topic.industry} name='industry' onChange={this.handleChange}/>
                                </li>
                                <li>
                                    <span>客户状态:</span>
                                    <input type='text' value={topic.rating} name='rating' onChange={this.handleChange}/>
                                </li>
                                <li>
                                    <span>销售负责人:</span>
                                    <span>管理员</span>
                                </li>
                                <li>
                                    <span>上级单位:</span>
                                    <input type='text' value= {topic.rating} name='rating' onChange={this.handleChange}/>
                                </li>
                                <li>
                                    <span>客户类型:</span>
                                    <span>{topic.account_type}</span>
                                </li>
                                <li>
                                    <span>公司传真:</span>
                                    <input type='text' defaultValue= {topic.fax}/>
                                </li>
                                <li>
                                    <span>创建时间:</span>
                                    <span>{topic.createdtime}</span>
                                </li>
                                <li>
                                    <span>客户来源:</span>
                                    <span>{topic.leadsource}</span>
                                </li>
                                <li>
                                    <span>修改时间:</span>
                                    <span>{topic.modifiedtime}</span>
                                </li>
                                <li>
                                    <span>公司性质:</span>
                                    <span>{topic.accountproperty}</span>
                                </li>
                                <li>
                                    <span>重要等级:</span>
                                    <span>{topic.important_level}</span>
                                </li>
                                <li><span>客户关系:</span><span>较好</span></li>
                                <li>
                                    <span>注册资金:</span>
                                    <span>{topic.registeredcapital}</span>
                                </li>
                                <li>
                                    <span>创建人:</span>
                                    {this.state.disable ? <span>boss</span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>下次回访时间:</span>
                                    <DatePicker autoOk={true} name='lastcontactdate'/>
                                </li>
                                <li>
                                    <span>最新订单日期:</span>
                                    {this.state.disable ? <span>{topic.lastorderdate}</span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>最新联系日期:</span>
                                    <span>{topic.lastcontactdate}</span>
                                </li>
                                <li>
                                    <span>最新进展:</span>
                                    {this.state.disable ? <span></span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>审批人:</span>
                                    {this.state.disable ? <span></span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>保护结束时间:</span>
                                    {this.state.disable ? <span>{topic.lastdistributedate}</span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>最新销售机会:</span>
                                    {this.state.disable ? <span></span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>领取日期:</span>
                                    {this.state.disable ? <span></span> : <span style={styles.disable}>不可编辑</span>}
                                </li>
                                <li>
                                    <span>客户等级:</span>
                                    <span>{topic.cf_1372}</span>
                                </li>
                                <li>
                                    <span>是否公海:</span>
                                    <span>{topic.cf_1509}</span>
                                </li>
                                <li><span>成立日期:</span><span></span></li>
                            </ul>
                        </div>
                        <Subheader style={styles.sub}>地址信息</Subheader>
                        <div className='basic-msg address-msg'>
                            <ul>
                                <li>
                                    <span>国家:</span>
                                    <span>{topic.bill_country}</span>
                                </li>
                                <li>
                                    <span>省份:</span>
                                    <span>{topic.bill_state}</span>
                                </li>
                                <li>
                                    <span>城市:</span>
                                    <span>{topic.bill_city}</span>
                                </li>
                                <li>
                                    <span>邮编:</span>
                                    <span>{topic.bill_code}</span>
                                </li>
                                <div>
                                    <span>地址:</span>
                                    <div className='address-info'>
                                        <textarea rows='5' value={topic.bill_street}></textarea>
                                    </div>
                                </div>
                                <div>
                                    <span>交通路线:</span>
                                    <div className='address-info'>
                                        <textarea rows='5' value={topic.traffic}></textarea>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <Subheader style={styles.sub}>备注信息</Subheader>
                        <div className='basic-msg note-msg'>
                            <ul>
                                <div>
                                    <span>备注:</span>
                                    <div className='address-info'>
                                        <textarea rows='5'  defaultValue={topic.description}></textarea>
                                    </div>
                                </div>
                            </ul>
                        </div>
                        <Subheader style={styles.sub}>相关信息</Subheader>
                        <div className='basic-msg about-msg'>
                            <ul>
                                <li>
                                    <span>联系人</span>
                                    <ChevronRight style={styles.icon}/>
                                </li>
                                <li>
                                    <span>联系记录</span>
                                    <ChevronRight style={styles.icon}/>
                                </li>
                                <li>
                                    <span>销售订单</span>
                                    <ChevronRight style={styles.icon}/>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
Details.childContextTypes = {
    disable: React.PropTypes.bool.isRequired
}
export default Template({component: Details})
