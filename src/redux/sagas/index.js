import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionsCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import ActionCreatortors from '../actionsCreators'
import { getRuns } from './runs'
// email: "tuliofaria@devpleno.com",passwd: "abc123",
function* login(action) {
  console.log('login', action)

  let token = localStorage.getItem('token')
  //if (!token) {
  const login = yield axios.post('http://localhost:3001/users/login', {
    email: action.email,
    passwd: action.passwd,
  })
  if (login.data.token) {
    token = login.data.token
    localStorage.setItem('token', token)
    const user = jwtDecode(token)
    localStorage.setItem('user', user)
    yield put(ActionCreatortors.signinSuccess(user))
  } else {
    yield put(ActionCreatortors.signinFailure(login.data.message))
  }
}
function* auth() {
  const token = localStorage.getItem('token')
  if (token) {
    try {
      const user = jwtDecode(token)
      yield put(ActionCreatortors.authSuccess(user))
    } catch (err) {
      yield put(ActionCreatortors.authFailure('invalid token'))
    }
  } else {
    yield put(ActionCreatortors.authFailure('no token'))
  }
}

export default function* rootSaga() {
  console.log('root saga')
  yield all([
    takeLatest(Types.SIGNIN_REQUEST, login),
    takeLatest(Types.AUTH_REQUEST, auth),
    takeLatest(Types.GET_RUNS_REQUEST, getRuns),
    put(ActionCreatortors.authRequest()),
  ])
}
