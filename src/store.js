import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    if (action.type === "ADD_FEEDBACK") {
        return {...state, ...action.payload}
      }
      if (action.type === "RESET") {
        return {}
      }
      return state
    }

const store = createStore(feedback, applyMiddleware(logger));


export default store;