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
            <Header style={styles.appBar} />
            <nav>
              <ul className="menu">
                <li><Link to="/customer"><i className="material-icons">&#xE7FB;</i><span>客户</span></Link></li>
                <li><Link to="/contact"><i className="material-icons">&#xE0BE;</i>联系人</Link></li>
                <li><Link to="/record"><i className="material-icons">&#xE8B0;</i>联系记录</Link></li>
                <li><Link to="/order"><i className="material-icons">&#xE8FE;</i>销售订单</Link></li>
                <li><Link to="/audit"><i className="material-icons">&#xE90A;</i>审批中心</Link></li>
                <li><Link to="/check"><i className="material-icons">&#xE85E;</i>签到考勤</Link></li>
                <li><Link to="/photo"><i className="material-icons">&#xE439;</i>拍照</Link></li>
                <li><Link to="/bulletin"><i className="material-icons">&#xE85A;</i>公告</Link></li>
                <li><Link to="/work"><i className="material-icons">&#xE886;</i>工作协同</Link></li>
                <li><Link to="/servers"><i className="material-icons">&#xE873;</i>客户服务单</Link></li>
              </ul>
            </nav>
      </div>
    )
  }
})


export default Index;
