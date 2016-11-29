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
    constructor(props){
        super(props);
        this.props.actions.fetchTopic(this.props.params.id);
        this.state = {
            topic: this.props.results.topic
        }
    }
    hanleSubmit() {
        let form = document.querySelector('form');
        let path = this.props.location.pathname;
        fetch(`/${path}/iohoihaio/ihaiohfoiho`, {
            method: 'POST',
            body: new FormData(form)
        })
    }
    render() {
        const { topic } = this.state;
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
                                    <input type='text' value= {1} name='data[website]' />
                                </li>
                                <li>
                                    <span>客户编号:</span>
                                    <input type='text' value= {2}  name='data[account_no]'/>
                                </li>
                                <li>
                                    <span>商户名称:</span>
                                    <input type='text' value= {3} name='data[name]'/>
                                </li>
                                <li>
                                    <span>所属行业:</span>
                                    <div><DropMenu /></div>
                                </li>
                                <li>
                                    <span>客户状态:</span>
                                    <input type='text' value= {topic.rating} disabled/>
                                </li>
                                <li>
                                    <span>销售负责人:</span>
                                    <span>管理员</span>
                                </li>
                                <li><span>上级单位:</span><span>262</span></li>
                                <li><span>客户类型:</span><span>普通客户</span></li>
                                <li>
                                    <span>公司传真:</span>
                                    <input type='text' value= {topic.fax} disabled/>
                                </li>
                                <li><span>创建时间:</span><span>2016-11-22 19:14:14</span></li>
                                <li><span>客户来源:</span><span>市场活动</span></li>
                                <li><span>修改时间:</span><span>2016-11-22 19:14:14</span></li>
                                <li><span>公司性质:</span><span>民营企业</span></li>
                                <li><span>重要等级:</span><span>3</span></li>
                                <li><span>客户关系:</span><span>较好</span></li>
                                <li><span>注册资金:</span><span>500-1000万</span></li>
                                <li><span>创建人:</span><span>boss</span></li>
                                <li><span>下次回访时间:</span><span></span></li>
                                <li><span>最新订单日期:</span><span></span></li>
                                <li><span>最新联系日期:</span><span>2016-11-22</span></li>
                                <li><span>最新进展:</span><span></span></li>
                                <li><span>审批人:</span><span></span></li>
                                <li><span>保护结束时间:</span><span></span></li>
                                <li><span>最新销售机会:</span><span></span></li>
                                <li><span>领取日期:</span><span></span></li>
                                <li><span>客户等级:</span><span>A</span></li>
                                <li><span>是否公海:</span><span>0</span></li>
                                <li><span>成立日期:</span><span></span></li>
                            </ul>
                        </div>
                        <Subheader style={styles.sub}>地址信息</Subheader>
                        <div className='basic-msg address-msg'>
                            <ul>
                                <li><span>国家:</span><span>中国</span></li>
                                <li><span>省份:</span><span>四川</span></li>
                                <li><span>城市:</span><span>绵阳</span></li>
                                <li><span>邮编:</span><span>621000</span></li>
                                <div>
                                    <span>地址:</span>
                                    <div className='address-info'>
                                        <textarea rows='5' disabled></textarea>
                                    </div>
                                </div>
                                <div>
                                    <span>交通路线:</span>
                                    <div className='address-info'>
                                        <textarea rows='5' disabled></textarea>
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
                                        <textarea rows='5'  placeholder="this" disabled value="this"></textarea>
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
