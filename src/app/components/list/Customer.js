import React, { Component }from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import {grey400, darkBlack, lightBlack, fullWhite} from 'material-ui/styles/colors';
import Search from '../public/Search';
import Menu from '../public/Menu';

import {CONFIG} from '../../constants/Config';

let dataCustomerList = [
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    },
    {
        name: '山东泰恒科技有限公司',
        id: 'SO322',
        time: '2015-04-02',
        price: '2340.00',
        industry: '科研院所',
        customerType: '普通客户',
        customerStatus: '成交客户',
        salesDirector: '老板',
        creationTime: '2015-04-01 00:11:39',
        modifyTime: '2015-04-01 13:57:39',
        customerSource: '电话来访',
        staffSize: '50-200人',
        natureCompany: '民营企业',
        customerRelationship: '一般',
        registeredCapital: '1000万以上'
    }
]


const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: fullWhite,
        margin: '0 12px 12px',
        borderRadius: 4,
        boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px',
    },
    head: {
        textAlign: 'center',
        height: 45,
        lineHeight: '45px',
        backgroundColor:'rgb(255, 255, 255)',
    },
    fiexd:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    menu:{
        backgroundColor: '#7f7f7f',
        color: fullWhite,
        border: '1px solid #333'
    },
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial'
    }


}
class Head extends Component {
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<Menu items={CONFIG.customer} />}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}
const Lists = () => (
  <List style={{backgroundColor: '#efeef4',paddingTop: '93px'}}>
      {dataCustomerList.map((item, index) => (
          <ListItem
              style={styles.back}
              key={index}
              primaryText={
                  <p><span style={styles.textColor}>{item.name}</span></p>
              }
              secondaryText={
                  <p>
                      <span style={styles.textColor}>{item.id}&nbsp;&nbsp;{item.time}</span><br />
                      <span style={{darkBlack}}><span>金额：&nbsp;&nbsp;&nbsp;&nbsp;</span>{item.price}</span>
                  </p>
              }
              secondaryTextLines={2}
          />
      ))}
  </List>
)
class CustomerList extends Component {
    render() {
        return (
            <div>
                <div className="fiexded">
                    <Head />
                    <Search title='请输入客户名称或地址'/>
                </div>
                <Lists />
            </div>
        );
    }
}
export default CustomerList;
