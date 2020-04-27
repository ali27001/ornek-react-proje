import { createReducer } from 'redux-act'
import * as a from '../../actions/account'

const DEFAULT_STATE = {

}

export default createReducer(
  {
    [a.filterAccountSuccessful]: (state, payload) => {
      return { ...state }
    },
    [a.filterAccountFailure]: (state, payload) => {
      return { ...state }
    }
  },
  DEFAULT_STATE
);
