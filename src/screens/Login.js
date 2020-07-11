import React, { useState } from 'react'
import ActionCreator from '../redux/actionsCreators'
import { connect } from 'react-redux'

const INITIAL_STATE = {
  form: {
    email: '',
    passwd: '',
  },
}

// eslint-disable-next-line react/prop-types
const Login = ({ login }) => {
  const [state, setState] = useState(INITIAL_STATE)
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setState({ ...state, form: { [name]: value } })
  }
  const loginn = () => {
    login(state.form.email, state.form.passwd)
  }
  return (
    <div>
      <h1>Login</h1>
      <input type='text' name='email' onChange={handleChange} />
      <input type='password' name='passwd' onChange={handleChange} />
      <button onClick={loginn}>Logar</button>
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
