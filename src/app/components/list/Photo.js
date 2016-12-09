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
          data_uri: null,
          opacity: 0
        }
    }
    handleChange(event){
        event.preventDefault();
        let _this = this,
            img = new Image(),
            file  = event.target.files[0],
            fileURL = URL.createObjectURL(file),
            width = document.body.clientWidth * 0.55;
        img.src = fileURL;
        img.onload = function() {
            let canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = width;
            let ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, width, width);
            let base64 = canvas.toDataURL('image/jpeg', .8);
            _this.setState({data_uri: base64, opacity: 1, open: false});
            // URL.revokeObjectURL(fileURL);
        }

    }
    handleSubmit(event){
        const form = document.querySelector('form');
        const data = new FormData();
    }
    handleToggle(event){
        this.setState({open: !this.state.open});
        event.preventDefault();
    }
    handleClose(){
        this.setState({open: false});
    }
    render(){
        let pathname = this.props.location.pathname;
        const w = document.body.clientWidth * 0.56;
        const {data_uri, opacity, open} = this.state;
        return(
            <div>
                <Header pathname={pathname}/>
                <div style={{padding: '12px 6px 30px 6px'}}>
                    <form encType="multipart/form-data" onSubmit={()=>this.handleSubmit(this)} method="post">
                        <input type='text' placeholder='请选择客户' className='photo_input'/>
                        <input type='text' placeholder='请输入描述' className='photo_input'/>
                        <div className='photo_img' style={{height: w ,overflow: 'hidden',width: w}} ref="IMGBOX">
                            <img src={data_uri} style={{opacity: opacity}} />
                        </div>
                        <RaisedButton
                            label={data_uri? '更换图片' : '添加图片'}
                            fullWidth={true}
                            backgroundColor='#5e95c9'
                            labelColor='#fff'
                            style={{margin:'20px 0'}}
                            onTouchTap={this.handleToggle}
                        />
                        <div className="click_element_input" style={{backgroundColor: '#5e95c9'}}>
                            <span>提交</span><input type='submit' value="Upload"/>
                        </div>
                    </form>
                </div>

                {/*弹出层*/}

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
