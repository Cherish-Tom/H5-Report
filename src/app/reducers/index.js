import { TOPICS, TOPIC } from '../actions';
import { GET_DATA_START, GET_DATA_SUCCESS } from '../actions';

export const postDate = (state = {}, action) => {
    switch (action.type) {
      case TOPICS:
          return {
              type: action.type,
              topics: action.results
          }
      case TOPIC:
          return {
              type: action.type,
              topic: action.results.topic,
          }
      default:
          return state
    }
}
export const requestData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_DATA_START:
            return state
        case GET_DATA_SUCCESS:
            action.success(action.json)
            state[action.name] = action.json
            return state
        default:
            return state
    }
}
