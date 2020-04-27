import { call } from 'redux-saga/effects'
export function* callHttp(...args) {
  try {
    let data = yield call(...args)
    return data;
  } catch (err) {
    throw err;
  }
}

