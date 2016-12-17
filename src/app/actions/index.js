import 'isomorphic-fetch'
require('es6-promise').polyfill();
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionType';
import { GET_DATA_START, GET_DATA_SUCCESS } from '../constants/ActionType';
import { BASIC_URL } from '../constants/Config';
import { Tool } from '../constants/Tools'


const requestPosts = path => {
    return {
        type: REQUEST_POSTS,
        path
    }
}
const receivePosts = (path, json) => {
    return {
        type: RECEIVE_POSTS,
        path,
        json
    }
}
export const fetchPosts = options => {
    let url = '';
    if (options && options.url) {
         url = `${BASIC_URL}/${options.url}/?type=${options.type||'all'}&limit=${options.limit||8}&page=${options.page|| 1}`;
    }
    return dispatch => {
        dispatch(requestPosts(options.url))
        return fetch(url)
            // .then(response =>response.json())
            // .then(json => dispatch(receivePosts(options.url, json)))
            .then(response => {
                if(response.ok){
                    response.json().then(json => dispatch(receivePosts(options.url, json)))
                } else {
                    console.log(response.status);
                }
            })
            .catch(error => console.log(error))
    }
}
export const fetchPost = path => {
    let url = '';
    if (path) {
         url = `${BASIC_URL}/${path}`;
    }
    return dispatch => {
        dispatch(requestPosts(path));
        return  fetch(url, {
                    mode: 'no-cors'
                })
                .then(response =>response.json())
                .then(json => dispatch(receivePosts(path, json)))
                .catch(error => console.log(error))
    }
}
const getDataStart = path => {
  return {
    type: GET_DATA_START,
    path
  }
}
const getDataSuccess = (path, json, success, name) => {
  return {
    type: GET_DATA_SUCCESS,
    path ,
    json ,
    success,
    name
  }
}
export const getDate = (path, postData, success, name) => {
    let url = BASIC_URL + path + Tool.paramType(postData);
    return dispatch => {
        dispatch(getDataStart(path));
        return fetch(url)
                .then(response => {
                    if(response.ok) {
                        response.json().then(json => dispatch(getDataSuccess(path, json, success, name)))
                    } else {
                        console.error("Looks like the response wasn't perfect, got status", response.status);
                    }
                })
                .catch(error => console.log(error))
    }
}
