import 'whatwg-fetch';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionType';
import { CONFIG_ACTIONS } from '../constants/Config';


export const BASIC_URL = 'http://192.168.123.162/oa';
export const TOPICS = 'TOPICS';
export const TOPIC = 'TOPIC';

//
//
// const requestPosts = path => {
//     return {
//         type: REQUEST_POSTS,
//         path
//     }
// }
//
// const receivedPosts = (path, json) => {
//     return {
//         type: RECEIVE_POSTS,
//         path,
//         json
//     }
// }
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
    console.log(options);
    const type = 'TOPICS';
    let url = '';
    if (options) {
        url = `${BASIC_URL}/customer?page=${options.page||1}&limit=${options.limit||20}`
    }
    console.log('url', url);

    return fetch(url, {
         mode: 'no-cors',
    })
        .then(response => response.json())
        .then(json => dispatch(received(type, json)))
}

// const shouldFetchTopics = state => {
//     const { postReddit } = state;
//     if (!postReddit) {
//         return
//     }
//     return !postReddit['results']
// }
//
// export const fetchTopicsIfNeed = options =>  {
//     return (dispatch, getState) => {
//         if (shouldFetchTopics(getState())) {
//             return dispatch(fetchTopics(options))
//         } else {
//             return Promise.resolve();
//         }
//     }
// }


export const fetchTopic = id => dispatch => {
    const type = 'TOPIC';
    fetch(`${BASIC_URL}/customer/${id}`)
        .then(response => response.json())
        .then(json => dispatch(received(type, json)))
}
