/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ActionCreator from '../redux/actionsCreators'
import { connect } from 'react-redux'

const INITIAL_STATE = {
  email: '',
  passwd: '',
}

// eslint-disable-next-line react/prop-types
const Login = ({ login, auth }) => {
  const [state, setState] = useState(INITIAL_STATE)
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, [name]: value })
  }
  const loginn = () => {
    login(state.email, state.passwd)
  }
  if (auth.isAuth) {
    if (auth.user.role === 'admin') {
      return <Redirect to='/admin' />
    }
    return <Redirect to='/restrito' />
  }
  return (
    <div>
      <h1>Login</h1>
      <input type='text' name='email' onChange={handleChange} />
      <input type='password' name='passwd' onChange={handleChange} />
      <button onClick={loginn}>Logar</button>
      {auth.error && <p>ERRO AO LOGAR!</p>}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, passwd) =>
      dispatch(ActionCreator.signinRequest(email, passwd)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
