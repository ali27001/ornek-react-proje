import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import login from './login';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    login
  })

  export default createRootReducer
