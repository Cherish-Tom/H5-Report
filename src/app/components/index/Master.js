import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const muiTheme =getMuiTheme({
    tabs: {
        backgroundColor: '#fff',
        textColor:'rgba(94, 149, 201 ,.8)',
        selectedTextColor: 'rgba(255, 255, 255, 1)'
    },
    appBar:{
        height: 45,
    },
    fontFamily: 'Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif!important'
})
class Master extends Component {
    constructor(props, content){
        super(props, content);
    }
    render() {
        if(this.props.isFetching) {
            return null;
        }
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}
export default Master;
