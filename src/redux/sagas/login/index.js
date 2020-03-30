import { put, call } from 'redux-saga/effects'

import {
    LOGIN
} from 'api/constants'

import {
    loginSuccessful,
    loginFailure
} from 'redux/actions'

import {
    post
} from 'api/httpUtil'

export function* login({ payload }) {
    try {
        const { username, password } = payload

        //call endpoint
        const { response } = yield call(post, LOGIN, { user: { username, password } })

        //set result
        yield put(loginSuccessful(response))
    } catch (error) {
        // set error 
        yield put(loginFailure(error))
        console.error("Error happened when try to login.")
    }
}