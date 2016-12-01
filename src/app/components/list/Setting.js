import React from 'react';
import Header from '../public/Header';
import RaisedButton from 'material-ui/RaisedButton';
<<<<<<< HEAD
import Template from '../public/template';
=======
>>>>>>> 45c2f93e51384d60f5d81e795eb086c5285b8128
class Setting extends React.Component {
    constructor(props,contxt){
        super(props, contxt);
    }
    render() {
        const path = this.props.location.pathname;
        return (
            <div className='warp'>
<<<<<<< HEAD
                  <Header title='设置'/>
                  <div className='container'>
                      <div className='setting'>
                          <a href='/setting/about'>关于我们</a>
                          <a href='#' style={{margin: '10px 0'}}>意见反馈</a>
                          <a href='#'>清除缓存</a>
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
=======
                <Header title='设置' path={path}/>
                <div className='container'>
                    <div className='setting'>
                        <a href='/setting/about' >关于我们</a>
                        <a href='/setting/about' style={{margin: '15px 0'}}>意见反馈</a>
                        <a href='#' >清除缓存</a>
                    </div>
                    <RaisedButton
                        label='退出登录'
                        labelStyle={{fontSize: 16, letterSpacing: 1}}
                        fullWidth={true}
                        backgroundColor='rgb(94, 149, 201)'
                        labelColor='#fff'
                    />
                </div>
>>>>>>> 45c2f93e51384d60f5d81e795eb086c5285b8128
            </div>
        )
    }
}
<<<<<<< HEAD


export default Template({
    component: Setting
})
=======
export default Setting
>>>>>>> 45c2f93e51384d60f5d81e795eb086c5285b8128
