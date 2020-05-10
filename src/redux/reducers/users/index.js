import { createReducer } from 'redux-act'
import * as a from '../../actions/users'

const DEFAULT_STATE = {
    auth: {
        token: ''
    },
    getUsers: [],
}

export default createReducer(
    {
        [a.getUsersSuccessful]: (state, payload) => {
          state.getUsers = payload
            return { ...state }
        },
        [a.getUsersFailure]: (state, payload) => {
          console.log("buraya girdi")
          state.getUsers = [
            {
              "date": "2020-04-26T13:04:03.478Z",
              "_id": "5ea58729dd93537fc91c6002",
              "firstName": "eeee",
              "lastName": "rrrrr",
              "password": "$2b$10$A/Ew/p6JXg8DiYgeLPy5EOxapLkOnRANQKoeFa.jB7D/sg1DGtFx2",
              "email": "rrr",
              "__v": 0
            },
            {
              "date": "2020-04-26T13:12:52.946Z",
              "_id": "5ea588e5ba88ae809dd3e412",
              "firstName": "eeee",
              "lastName": "rrrrr",
              "password": "$2b$10$DzjX4Ywd1t4iuTwt9x8QQu6ysbEL9.gjWCAdx7Vj2cAh/Yp0wSMCe",
              "email": "rrre",
              "__v": 0
            },
            {
              "date": "2020-04-26T13:32:51.873Z",
              "_id": "5ea58e0af4c44081d5d9d609",
              "firstName": "Ali",
              "lastName": "Bulut",
              "password": "$2b$10$q1ek5LYohVttd3QARbDqT.mNpd2SgUVP2Wzdj3ufrWMthi00xZgSm",
              "email": "ali.27001@gmail.com",
              "__v": 0
            },
            {
              "date": "2020-04-26T13:32:51.873Z",
              "_id": "5ea58ebdf4c44081d5d9d60b",
              "firstName": "eeeAli",
              "lastName": "ee",
              "password": "$2b$10$3uZZWRShrGFCzaExKoPDBOOTG8CWTYMrymmVJSEsbBsyJhGKlGbea",
              "email": "ali.27e001@hotmail.com",
              "__v": 0
            }
          ]

          return { ...state }
        }
    },
    DEFAULT_STATE
);
