"use static";
import React from 'react';
import Header from '../public/Header';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
let StylePropable = require('material-ui/utils/stylePropable');
let StyleResizable = require('material-ui/utils/styleResizable');
import {
  Colors,
  getMuiTheme,
  Spacing
} from 'material-ui/styles';




const Index = React.createClass({

    getStyles() {
        const styles={
          appBar:{
            position: 'fixed',
            zIndex: 1001,
            top: 0
          }
        }

        return styles;
    },
  render(){
    const styles = this.getStyles();
    return(
      <div>
            <Header style={styles.appBar}/>
            <nav>
              <ul className="menu">
                <Link to="CustomerList"><li><i className="material-icons">&#xE7FB;</i><span>客户</span></li></Link>
                <Link to="ContactList"><li><i className="material-icons">&#xE0BE;</i>联系人</li></Link>
                <Link to="ConstactRecord"><li><i className="material-icons">&#xE8B0;</i>联系记录</li></Link>
                <Link to="OrderList"><li><i className="material-icons">&#xE8FE;</i>销售订单</li></Link>
                <Link to="AuditList"><li><i className="material-icons">&#xE90A;</i>审批中心</li></Link>
                <Link to="Customer"><li><i className="material-icons">&#xE85E;</i>签到考勤</li></Link>
                <Link to="Customer"><li><i className="material-icons">&#xE439;</i>拍照</li></Link>
                <Link to="Customer"><li><i className="material-icons">&#xE85A;</i>公告</li></Link>
                <Link to="Customer"><li><i className="material-icons">&#xE886;</i>工作协同</li></Link>
                <Link to="Customer"><li><i className="material-icons">&#xE873;</i>客户服务单</li></Link>
              </ul>
            </nav>
      </div>
    )
  }
})


export default Index;
