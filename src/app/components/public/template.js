import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { is, fromJS} from 'immutable';
const Main = (mySetting) => {
    let defaultSetting = {
        url      : '',
        data     : {},
        component: <div></div>
    }
    for (let key in mySetting) {
        defaultSetting[key] = mySetting[key]
    }
    class Index extends Component {
        constructor(props, context){
            super(props, context);
        }
        shouldComponentUpdate(nextProps, nextState) {
            if(nextProps.state.get('isFetching')){
                return false
            }
            return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
        }
        componentDidMount(){
            this.props.fetchPosts({url: this.props.defaultSetting.url})
        }
        render(){
            return  <this.props.defaultSetting.component {...this.props} state={this.props.state.toJS()} />;
        }
    }
    Index.defaultProps = { defaultSetting }
    return connect(state => {
        let { requestData } = state;
        return {
            state: state['fetchData'],
            requestData
        }
    }, actions)(Index);
}

export default Main;
