import { put } from 'redux-saga/effects'

import {
    ACCOUNT_FILTER
} from '../../../api/constants'

import {
    filterAccountSuccessful,
    filterAccountFailure
} from '../../actions'

import {
    callHttp
} from '../../../api/httpUtil'

import {
    post
} from '../../../api/axiosClient'

export function* filterAccount({payload}) {
    try {

        //call endpoint
        const { response } = yield callHttp(post, ACCOUNT_FILTER,payload)

        //set result
        yield put(filterAccountSuccessful(response))
    } catch (error) {
        // set error
        yield put(filterAccountFailure(error))
        console.error("Error happened when try to login.")
    }
}
