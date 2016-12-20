import React from 'react'
import Header from '../public/Header'
import Subheader from 'material-ui/Subheader'
import RaisedButton from 'material-ui/RaisedButton'
const styles = {
    textarea: {
        padding: '6px 12px',
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 12,
        border: 'none',
        fontFamily: 'inherit',
        marginBottom: 10
    }
}
export default class Opinion extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.handleChange = (event) => {
            this.setState({value: event.target.value})
        }
        this.handleSubmit = (event) => {
            alert('A name was submitted: ' + this.state.value);
            event.preventDefault()
        }
    }
    render(){
        return(
            <div className='warp'>
                <Header title='意见反馈' path={this.props.location.pathname}/>
                <Subheader style={{fontSize: 12}}>请留下您宝贵的建议:</Subheader>
                <div style={{padding: '0 16px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <textarea onChange={this.handleChange} placeholder='点击填写' style={styles.textarea} rows={12} value={this.state.value}></textarea>
                        <RaisedButton
                            label='提交反馈'
                            fullWidth={true}
                            primary={true}
                            labelColor='#fff'
                            type='submit'
                        />
                    </form>
                </div>
            </div>
        )
    }
}
