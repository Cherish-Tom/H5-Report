import fetch from 'isomorphic-fetch';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionType';
import { BASIC_URL } from '../constants/Config';
import { Tool } from '../constants/Tools';
export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'

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
         url = `${BASIC_URL}/${options.url}?type=${options.type||'all'}&limit=${options.limit||8}&page=${options.page|| 1}`;
    }
    return dispatch => {
        dispatch(requestPosts(options.url))
        return fetch(url)
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
export const fetchPost = (path, id, mode) => {
    const url = path && `${BASIC_URL}/${path}/${id}`
    const modeUrl = mode && `${BASIC_URL}/modules/${mode}`
    const results = {topic: {}, replies: {}}
    return dispatch => {
        dispatch(requestPosts(path + '/' + id))
        return  fetch(url)
                .then(response =>response.json())
                .then(json => {
                    results.topic = json.data
                    fetch(modeUrl)
                    .then(response => response.json())
                    .then(json => {
                        results.replies = json.data
                        dispatch(receivePosts((path + '/' + id), results))
                    })
                })
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
