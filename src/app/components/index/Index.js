import React, { Component } from 'react';
import Header from '../public/Header';
import {Link} from 'react-router';
const ACTIVE ={
    color: 'red'
}
class Index extends Component {
  render(){
    return(
      <div className='warp'>
            <Header path={this.props.location.pathname}/>
            <nav>
              <ul className="menu">
                <li><Link to="customer" activeStyle={ACTIVE} ><i className="material-icons">&#xE7FB;</i><span>客户</span></Link></li>
                <li><Link to="contact"><i className="material-icons">&#xE0BE;</i>联系人</Link></li>
                <li><Link to="record"><i className="material-icons">&#xE8B0;</i>联系记录</Link></li>
                <li><Link to="order"><i className="material-icons">&#xE8FE;</i>销售订单</Link></li>
                <li><Link to="audit"><i className="material-icons">&#xE90A;</i>审批中心</Link></li>
                <li><Link to="check"><i className="material-icons">&#xE85E;</i>签到考勤</Link></li>
                <li><Link to="photo"><i className="material-icons">&#xE439;</i>拍照</Link></li>
                <li><Link to="bulletin"><i className="material-icons">&#xE85A;</i>公告</Link></li>
                <li><Link to="work"><i className="material-icons">&#xE886;</i>工作协同</Link></li>
                <li><Link to="servers"><i className="material-icons">&#xE873;</i>客户服务单</Link></li>
              </ul>
            </nav>
      </div>
    )
  }
}


export default Index;
