import 'whatwg-fetch';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionType';
import { BASIC_URL } from '../constants/Config';
export const TOPICS = 'TOPICS';
export const TOPIC = 'TOPIC';
const requestPosts = path => {
    return {
        type: REQUEST_POSTS,
        path
    }
}

const receivedPosts = (path, json) => {
    return {
        type: RECEIVE_POSTS,
        path,
        json
    }
}
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
        url = `${BASIC_URL}/${options.path}?type=${options.type||'all'}&page=${options.page||1}&limit=${options.limit||20}`
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
