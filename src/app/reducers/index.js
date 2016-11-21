import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../constants/ActionType';
import { fetchIssues, receiveIssues } from '../actions/index';
// import * as actions from '../actions';
let defaultIssuesStore = {
    isFetching: false,
    items: []
};

function postIssues(defaultIssuesState, action) {
    switch (action.type) {
        case REQUEST_ISSUES:
            return Object.assign({}, defaultIssuesState, {
                isFetching: true
            });
        case RECEIVE_ISSUES:
            return Object.assign({}, defaultIssuesState, {
                isFetching: false,
                items: action.posts
            });
        default:
            return defaultIssuesStore;
    }
}
export default postIssues;
