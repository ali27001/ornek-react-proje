import { createStore, applyMiddleware } from 'redux'

import createRootReducer from './redux/reducers'
import middleware, { sagaMiddleware } from './middleware'
import history from './history'
import saga from './redux/sagas'

export default createStore(
  createRootReducer(history),
  applyMiddleware(...middleware)
)
sagaMiddleware.run(saga);
