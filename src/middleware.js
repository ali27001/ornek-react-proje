import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'

import history from './history'

const routeMiddleware = routerMiddleware(history)
export const sagaMiddleware = createSagaMiddleware()

export default [sagaMiddleware, routeMiddleware]
