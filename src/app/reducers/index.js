
import { TOPICS, TOPIC } from '../actions';
import { combineReducers } from 'redux'


const postReddit = (state = {}, action) => {
    switch (action.type) {
      case TOPICS:
          return {
              ['results']: {
                  type: action.type,
                  topics: action.results
              }
          }
      case TOPIC:
          return {
              ['results']: {
                  type: action.type,
                  topic: action.results.topic,
              }
          }
      default:
          return state
    }
}


const rootReducer = combineReducers({
    postReddit
})

export default rootReducer
