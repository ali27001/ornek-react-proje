import { takeLatest } from 'redux-saga/effects'

import * as loginAction from '../actions/login'
import * as loginSaga from './login'

import * as usersAction from '../actions/users'
import * as usersSaga from './users'

export default function* saga() {
    const relations = [
        [loginAction, loginSaga],
        [usersAction, usersSaga]
    ];

    for (const [actions, sagas] of relations) {
        for (const [actionName, action] of Object.entries(actions)) {
            const saga = sagas[actionName]

            if (saga)
                yield takeLatest(action.getType(), saga)
        }
    }
}
