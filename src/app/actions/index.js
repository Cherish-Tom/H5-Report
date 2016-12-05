import 'whatwg-fetch';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionType';
import { BASIC_URL } from '../constants/Config';
import { Tool } from '../constants/Tools'
export const TOPICS = 'TOPICS';
export const TOPIC = 'TOPIC';
export const GET_DATA_START = 'GET_DATA_START'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
const received = (type, json) => {
    switch (type) {
      case TOPICS:
          return {
              type: type,
              results: json.data
          }
      case TOPIC:
          return {
              type: type,
              results: {
                  topic: json.data
              }
          }
      default:
          return {}
    }
}


export const fetchTopics  = options => (dispatch) => {
    const type = 'TOPICS';
    let url = '';
    if (options) {
        url = `${BASIC_URL}/${options.url}?type=${options.type||'all'}&page=${options.page||1}&limit=${options.limit||20}`
    }
    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(received(type, json)))
        .catch(error => console.log(error))
}
export const fetchTopic = id => dispatch => {
    const type = 'TOPIC';
    fetch(`${BASIC_URL}/customer/${id}`)
        .then(response => response.json())
        .then(json => dispatch(received(type, json)))
}



const getDataStart = path => {
    return {
        type: GET_DATA_START,
        path
    }
}
const getDataSuccess = (path, json, success) => {
  return {
    type: GET_DATA_SUCCESS,
    path ,
    json ,
    success
  }
}

export const getData = (path, postData, json, success) => {
    let url = BASIC_URL + path + Tool.paramType(postData);
    return dispatch => {
        dispatch(getDataStart(postData))
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
        })
        .then(response => response.json())
        .then(json => dispatch(getDataSuccess(path, json, success)))
        .catch(error => console.log(error))
    }
}
