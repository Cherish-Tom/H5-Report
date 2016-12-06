import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
const Main = (mySetting) => {
    let defaultSetting = {
        id       : '',
        url      : '',
        data     : {},
        component: <div></div>
    }
    for (let key in mySetting) {
        defaultSetting[key] = mySetting[key]
    }
    class Index extends Component {
        constructor(props, context){
            super(props,context);
        }
        render(){
            return  <this.props.defaultSetting.component {...this.props} state={this.props.state}/>;
        }
        shouldComponentUpdate(nextProps, nextState) {
            return !(this.props === nextProps) || !(this.state === nextState)
        }
    }
    Index.defaultProps = { defaultSetting }
    const mapDispatchToProps = dispatch => {
        return {actions: bindActionCreators(actions, dispatch)}
    }
    const mapStateToProps = state => {
        const { postDate , requestData } = state
        let topics = [], topic = {}
        switch (postDate.type) {
            case actions.TOPIC:
                topic = postDate.topic
                break
            case actions.TOPICS:
                topics = postDate.topics
                break
            default:
                {}
        }
        return { topics, topic , requestData}
    }
    return connect(mapStateToProps, actions)(Index);
}

export default Main;
