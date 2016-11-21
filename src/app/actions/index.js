import fetch from 'isomorphic-fetch';
import { REQUEST_ISSUES, RECEIVE_ISSUES } from '../constants/ActionType';
import { CONFIG } from '../constants/Config';

//获取issues
function requestIssues(filter, perPage) {
    return {
        trye: REQUEST_ISSUES,
        filter,
        perPage
    };
}

//接受issues
function receiveIssues(json) {
    return {
        type: RECEIVE_ISSUES,
        posts: json
    };
}

//thunk action creater
export function fetchIssues(filter, perPage) {
    return dispatch => {
        dispatch(requestIssues(filter, perPage));

        let url = `https://api.github.com/repos/${CONFIG.owner}/${CONFIG.repo}/issues`,
            href = `https://github.com/${CONFIG.owner}/${CONFIG.repo}/issues`;

        url += '?filter=$(filter)&per_page=$(perPage)';

        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveIssues(json)))
            .catch(e => {window.location.href = href});
    };
}

function shouldFetchIssues(state) {
    if (!state) return true;
    return !state.items.length;
}

//按需获取issues
export function fetchIssuesIfNeeded(filter, perPage) {
    return function(dispatch, getState) {
        if( shouldFetchIssues(getState()) ) {
            return dispatch(fetchIssues(filter, perPage));
        } else {
            return Promise.resolve();
        }
    };
}
