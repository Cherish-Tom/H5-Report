import React from 'react';
import Header from './Header';
import 'whatwg-fetch';
import { data } from '../list/data';
import Subheader from 'material-ui/Subheader';
import Template from './template';
import IconButton from 'material-ui/IconButton';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const styles = {
    sub: {
        lineHeight: '30px',
        paddingLeft: 0
    },
    icon: {
        color: 'rgba(0, 0, 0, 0.54)'
    }
}
class DropMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 1};
    }
    handleChange (event, index, value) {
        this.setState({value});
    }
    render(){
        return(
            <DropDownMenu
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
                underlineStyle={{display: 'none'}}
                style={{height: 40, lineHeight: '40px', color: 'rgb(94, 149, 201)'}}
                menuStyle={{lineHeight: '40', color: 'rgb(94, 149, 201)'}}
                iconStyle={{display: 'none'}}
            >
                <MenuItem value={1} primaryText="Never" />
                <MenuItem value={2} primaryText="Every Night" />
                <MenuItem value={3} primaryText="Weeknights" />
                <MenuItem value={4} primaryText="Weekends" />
                <MenuItem value={5} primaryText="Weekly" />
            </DropDownMenu>
        )
    }
}

class Details extends React.Component {
    constructor(props, context){
        super(props, context);
        this.props.actions.fetchTopic(this.props.params.id);
        this.state = {
            topic: {}
        }
    }
    componentDidMount() {
        this.setState({topic: this.props.results.topic});
    }
    hanleSubmit(event) {
        event.preventDefault();
        let form = document.querySelector('form');
        // $.ajax({
        //     type: 'PUT',
        //     cache: true,
        //     url: 'http://192.168.123.162/oa/customer/14315',
        //     data: {'sss':1},
        //     async: false,
        //     success: function(data) {
        //         console.log(data);
        //     },
        //     error: function(request) {
        //         console.log('error');
        //     }
        // })
        fetch(`http://192.168.123.162/oa/customer/14315`, {
            method: 'PUT',
            body: new FormData(form)
        })
        .then(response => response.json)
        .catch(e => console.log(e))
    }
    handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;
    }
    render() {
        const {topic} = this.props.results;
        return (
            <div>
                <div className="fiexded">
                    <Header />
                </div>
                <div style={{padding: '45px 6px 0 6px'}}>
                    <form onSubmit={this.hanleSubmit} >
                        <Subheader style={styles.sub}>基本信息</Subheader>
                        <div className='basic-msg'>
                            <ul>
                                <li>
                                    <span>网站:</span>
                                    <input type='text' value= {topic.website} name='website' onChange={this.handleChange.bind(this)}/>
                                </li>
                                <li>
                                    <span>客户编号:</span>
                                    <input type='text' value= {topic.account_no}  name='account_no' onChange={this.handleChange.bind(this)}/>
                                </li>
                                <li>
                                    <span>商户名称:</span>
                                    <input type='text' value= {topic.accountname} name='accountname' onChange={this.handleChange.bind(this)}/>
                                </li>
                                <li>
                                    <span>所属行业:</span>
                                    <input type='text' value= {topic.industry} name='industry' onChange={this.handleChange.bind(this)}/>
                                </li>
                                <li>
                                    <span>客户状态:</span>
                                    <input type='text' value= {topic.rating} name='rating' onChange={this.handleChange.bind(this)}/>
                                </li>
                                <li>
                                    <span>销售负责人:</span>
                                    <span>管理员</span>
                                </li>
                                <li>
                                    <span>上级单位:</span>
                                    <input type='text' value= {topic.rating} name='rating' onChange={this.handleChange.bind(this)}/>
                                </li>
                                <li>
                                    <span>客户类型:</span>
                                    <span>{topic.account_type}</span>
                                </li>
                                <li>
                                    <span>公司传真:</span>
                                    <input type='text' value= {topic.fax} onChange={this.handleChange.bind(this)}/>
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
                                <li><span>创建人:</span><span>boss</span></li>
                                <li>
                                    <span>下次回访时间:</span>
                                    <span>{topic.nextcontactdate}</span>
                                </li>
                                <li>
                                    <span>最新订单日期:</span>
                                    <span></span>
                                </li>
                                <li>
                                    <span>最新联系日期:</span>
                                    <span>{topic.lastcontactdate}</span>
                                </li>
                                <li><span>最新进展:</span><span></span></li>
                                <li><span>审批人:</span><span></span></li>
                                <li><span>保护结束时间:</span><span></span></li>
                                <li><span>最新销售机会:</span><span></span></li>
                                <li><span>领取日期:</span><span></span></li>
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
                                        <textarea rows='5' value={topic.bill_street} onChange={this.handleChange.bind(this)}></textarea>
                                    </div>
                                </div>
                                <div>
                                    <span>交通路线:</span>
                                    <div className='address-info'>
                                        <textarea rows='5' value={topic.traffic} onChange={this.handleChange.bind(this)}></textarea>
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
                                        <textarea rows='5'  value={topic.description} onChange={this.handleChange.bind(this)}></textarea>
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
                        <button type='submit'>sssss</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Template({
    component: Details
})
