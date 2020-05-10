import { put } from 'redux-saga/effects'

import {
    LOGIN,
    GET_USERS
} from '../../../api/constants'

import {
    loginSuccessful,
    loginFailure,
    getUsersSuccessful,
    getUsersFailure
} from '../../actions'

import {
    callHttp
} from '../../../api/httpUtil'

import {
    post,get
} from '../../../api/axiosClient'

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


export function* getUsers({ payload }) {
    try {

        //call endpoint
        console.log("buraya istek geldi")
        const response = yield callHttp(get, GET_USERS, payload);


        //set result
        yield put(getUsersSuccessful(response));

    } catch (error) {
        // set error
        yield put(getUsersFailure(error))
        console.error("users listesini çekerken hata oluştu.")
    }
}
