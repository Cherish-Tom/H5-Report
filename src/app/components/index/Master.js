import React, { Component, PropTypes, cloneElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as actions from '../../actions';
const muiTheme =getMuiTheme({
    tabs: {
        backgroundColor: '#fff',
        textColor:'rgba(94, 149, 201 ,.8)',
        selectedTextColor: 'rgba(255, 255, 255, 1)'
    },
    appBar:{
        height: 45,
        display: 'flex'
    },
    fontFamily: 'Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif!important'
})
class Master extends Component {
    render() {
        let layout = '';
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => cloneElement(child), {
                actions: this.props.actions,
                results: this.props.results
            })
        let pathname = this.props.location.pathname;
        return(
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>{ childrenWithProps }</div>
            </MuiThemeProvider>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
const mapStateToProps = state => {
  const { postReddit } = state
  let replies = [], topics = [], topic = {}, results = postReddit['results']
  if (results) {
    switch (results.type) {
      case actions.TOPIC:
        topic = results.topic
        replies = results.replies
        break
      case actions.TOPICS:
        topics = results.topics
        break
      default:
        {}
    }
  }
  return { results: { replies, topics, topic } }
}
export default connect(mapStateToProps, mapDispatchToProps)(Master);
