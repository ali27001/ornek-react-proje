import { createAction } from 'redux-act'

export const getUsers = createAction('getUsers')
export const getUsersSuccessful = createAction('getUsers Successful')
export const getUsersFailure = createAction('getUsers Failure')
