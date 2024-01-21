import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';


// feedback is a reducer function. It is a global state and changes in response to actions in the app 
const feedback = (state = {}, action) => {
//ADD_FEEDBACK updates state by merging the current state with the action payload (next button)
    if (action.type === "ADD_FEEDBACK") {
        return {...state, ...action.payload}
      }
// RESET clears and returns to an empty state (leave new feedback button)
      if (action.type === "RESET") {
        return {}
      }
      return state
    }

// store creates the redux store by taking the feedback reducer argument. 
//logger is the middleware and it logs the items that are dispatched in the console log
const store = createStore(feedback, applyMiddleware(logger));


export default store;