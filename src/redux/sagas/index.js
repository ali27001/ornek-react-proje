import { takeLatest } from 'redux-saga/effects'

import * as loginAction from '../actions/login'
import * as loginSaga from './login'

export default function* saga() {
    const relations = [
        [loginAction, loginSaga]
    ];

    for (const [actions, sagas] of relations) {
        for (const [actionName, action] of Object.entries(actions)) {
            const saga = sagas[actionName]

            if (saga)
                yield takeLatest(action.getType(), saga)
        }
    }
}
