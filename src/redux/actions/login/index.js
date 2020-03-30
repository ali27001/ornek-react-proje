import { createAction } from 'redux-act'

export const login = createAction('Login')
export const loginSuccessful = createAction('Login Successful')
export const loginFailure = createAction('Login Failure')