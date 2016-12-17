import React, {Component} from  'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
const styles={
    title:{
        color: '#33b5e5',
        borderBottom: '2px solid #33b5e5',
        padding: '16px 18px '
    },
    body: {
        paddingTop: 12,
    },
    actions:{
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        flex: 1
    }
}
export default class Alert extends Component {
    constructor(props, context){
        super(props, context)
        this.state = {
            open: false
        }
        this.handleClose = () => {
            this.setState({open: false})
        }
    }
    render(){
        const actions = [
             <FlatButton
               label="取消"
               primary={true}
               style={{flex: 1, borderRight: '1px solid #ddd'}}
               onTouchTap={this.handleClose}
             />,
             <FlatButton
               label="确认"
               primary={true}
               style={{flex: 1}}
             />
       ];
        return(
            <Dialog
                title='确认保存'
                titleStyle={styles.title}
                actions={actions}
                open={this.props.open}
                bodyStyle={styles.body}
                actionsContainerStyle={styles.actions}
            >
                {this.props.msg || '确认保存当前修改?'}
            </Dialog>
        )
    }
}
