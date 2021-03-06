import { GET_DATA_START, GET_DATA_SUCCESS } from '../constants/ActionType';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../constants/ActionType';
import Immutable from 'immutable'
const defaultState = Immutable.fromJS({data: {}, isFetching: false})
export const fetchData = (state = defaultState, action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return state.set('isFetching', true)
        case RECEIVE_POSTS:
            return Immutable.Map({'data':action.json,'isFetching':false})
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
