import React from 'react';
import Header from '../public/Header';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import Template from '../public/template';
class Setting extends React.Component {
    constructor(props,contxt){
        super(props, contxt);
    }
    render() {
        return (
            <div className='warp'>
                  <Header title='设置' path={this.props.location.pathname}/>
                  <div className='container'>
                      <div className='setting'>
                          <Link to='/setting/about'>关于我们</Link>
                          <Link to='/setting/opinion' style={{margin: '10px 0'}}>意见反馈</Link>
                          <Link to='#'>清除缓存</Link>
                      </div>
                      <RaisedButton
                          label='退出登录'
                          fullWidth={true}
                          backgroundColor='rgb(94, 149, 201)'
                          labelColor='#fff'
                          labelStyle={{fontSize: 16, letterSpacing: 1}}
                          style={{height: 45, fontSize: 16}}
                      />
                  </div>
            </div>
        )
    }
}
export default Template({
    component: Setting
})
