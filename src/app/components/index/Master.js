import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactTransitionGroup from 'react-addons-transition-group'
import Template from '../public/template';
const muiTheme =getMuiTheme({
    tabs: {
        backgroundColor: '#fff',
        textColor:'rgba(94, 149, 201 ,.8)',
        selectedTextColor: 'rgba(255, 255, 255, 1)'
    },
    appBar:{
        height: 45,
        padding: 12
    },
    fontFamily: 'Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif!important'
})
class Master extends Component {
    render() {
        const path = this.props.location.pathname;
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    { this.props.children }
                </div>
            </MuiThemeProvider>
        )
    }
}
export default Master
