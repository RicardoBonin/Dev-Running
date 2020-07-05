import React from 'react'
import { connect } from 'react-redux'
import Creators from './redux/actionsCreators'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <p>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/restrito">Restrito</Link>
        <Link to="/login">Login</Link>
      </p>
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
    signin: (email, passwd) => Creators.signinRequest(email, passwd),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
