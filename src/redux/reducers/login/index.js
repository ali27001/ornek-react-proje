import { createReducer } from 'redux-act'
import * as a from '../../actions/login'

const DEFAULT_STATE = {
    auth: {
        token: ''
    }
}

export default createReducer(
    {
        [a.loginSuccessful]: (state, payload) => {
            return { ...state }
        },
        [a.loginFailure]: (state, payload) => {
            return { ...state }
        }
    },
    DEFAULT_STATE
);
