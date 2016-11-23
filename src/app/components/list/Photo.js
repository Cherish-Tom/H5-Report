import React from 'react';
import Header from '../public/Header';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ClassNames from 'classnames';

class Photo extends React.Component {
    constructor(props){
        super(props)
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
          open: false,
          value:''
        }
    }
    handleChange(event){
        event.preventDefault();
        const value = event.target.value.split(/(\\|\/)/g).pop();
        console.log(value);
        this.setState({value: value})
    }
    handleToggle(event){
        this.setState({open: !this.state.open});
        event.preventDefault();
    }
    handleClose(){
        this.setState({open: false})
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
                            <img src=''/>
                        </div>
                        <RaisedButton
                            label='添加图片'
                            fullWidth={true}
                            backgroundColor='#5e95c9'
                            labelColor='#fff'
                            style={{margin:'20px 0'}}
                            onTouchTap={this.handleToggle}
                        />
                        <RaisedButton
                            label='发送'
                            fullWidth={true}
                            backgroundColor='#5e95c9'
                            labelColor='#fff'
                        />
                    </form>
                </div>
                <div>
                    <div className={ClassNames('overlay',{open: this.state.open})}></div>
                    <div className={ClassNames('click_element',{open: this.state.open})}>
                        <div className="click_element_input" style={{backgroundColor: '#04c7ce'}}>
                            拍照
                            <input
                                type='file'
                                accept='image/jpg,image/jpeg,image/png,image/gif'
                                capture="camera"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="click_element_input" style={{margin: '20px 0'}}>
                            从相册中选取
                            <input
                                value={this.state.value}
                                ref='nameInput'
                                type='file'
                                accept='image/jpg,image/jpeg,image/png,image/gif'
                                onChange={this.handleChange}
                            />
                        </div>
                        <RaisedButton label='取消'
                            fullWidth={true}
                            backgroundColor='#ccc'
                            labelColor='#fff'
                            onTouchTap={()=>this.handleClose(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default Photo
