import { put } from 'redux-saga/effects'

import {
    LOGIN
} from 'api/constants'

import {
    loginSuccessful,
    loginFailure
} from 'redux/actions'

import {
    callHttp
} from 'api/httpUtil'

import {
    post
} from 'api/axiosClient'

export function* login({ payload }) {
    try {
        const { username, password } = payload

        //call endpoint
        const { response } = yield callHttp(post, LOGIN, { user: { username, password } })

        //set result
        yield put(loginSuccessful(response))
    } catch (error) {
        // set error
        yield put(loginFailure(error))
        console.error("Error happened when try to login.")
    }
}
