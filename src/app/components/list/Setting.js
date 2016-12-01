import React from 'react';
import Header from '../public/Header';
import RaisedButton from 'material-ui/RaisedButton';
class Setting extends React.Component {
    constructor(props,contxt){
        super(props, contxt);
    }
    render() {
        const path = this.props.location.pathname;
        return (
            <div className='warp'>
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
            </div>
        )
    }
}
export default Setting
