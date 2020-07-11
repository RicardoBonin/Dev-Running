import { takeLatest, all } from 'redux-saga/effects'
import { Types } from '../actionsCreators'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
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
  }
}

export default function* rootSaga() {
  console.log('root saga')
  yield all([takeLatest(Types.SIGNIN_REQUEST, login)])
}
