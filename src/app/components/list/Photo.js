import React from 'react';
import Header from '../public/Header';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Photo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        let pathname = this.props.location.pathname;
        const w = document.body.clientWidth*0.55555;
        return(
            <div>
                <Header pathname={pathname}/>
                <div style={{padding: '12px 6px 30px 6px'}}>
                    <form>
                        <input type='text' placeholder='请选择客户' className='photo_input'/>
                        <input type='text' placeholder='请输入描述' className='photo_input'/>
                        <div className='photo_img' style={{height: w, overflow: 'hidden',width: w}}>
                            <img src="http://www.material-ui.com/images/nature-600-337.jpg" />
                        </div>
                        <RaisedButton label='添加图片' fullWidth={true} backgroundColor='#5e95c9' labelColor='#fff' style={{margin:'20px 0'}}/>
                        <RaisedButton label='发送' fullWidth={true} backgroundColor='#5e95c9' labelColor='#fff' />
                    </form>
                </div>
            </div>
        )
    }
}


export default Photo
