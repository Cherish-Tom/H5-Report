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
            return  <this.props.defaultSetting.component {...this.props} />;
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
    return connect(mapStateToProps, mapDispatchToProps)(Index);
}

export default Main;
