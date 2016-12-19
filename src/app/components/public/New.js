import React, {Component} from 'react';
import Template from './template';
import {AppBar,IconButton,List, ListItem} from 'material-ui';
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: '#fff',
        margin: 8,
        borderRadius: 4,
        boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px',
    },
    head: {
        textAlign: 'center',
        height: 45,
        lineHeight: '45px',
        backgroundColor:'rgb(255, 255, 255)',
    },
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial',
        color: 'rgb(33, 33, 33)',
        fontSize: 18
    },
    edit: {
        height: 45,
        lineHeight: '45px',
        color: 'rgb(94, 149, 201)',
        width: 48,
        fontSize: 14
    }
}
class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: []
        }
    }
    componentDidMount(){
        fetch('http://192.168.123.162/oa/modules/6?type=quick_create')
            .then(response => response.json())
            .then(json => this.setState({data: json.data}))
    }
    render(){
        return (
            <div>
                <AppBar
                    style={styles.head}
                    titleStyle={styles.title}
                    title='快速创建'
                    iconStyleRight={{marginTop: 0}}
                    iconStyleLeft={{marginTop: 0, marginRight: 0}}
                    iconElementLeft={<div onTouchTap={this.context.router.goBack} style={styles.edit}>取消</div>}
                    iconElementRight={<div style={styles.edit}>确认</div>}
                />
            </div>
        )
    }
}
New.contextTypes = {
    router: React.PropTypes.object
}
export default Template({
    component: New
});
