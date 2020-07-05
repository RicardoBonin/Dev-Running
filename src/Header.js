import React from 'react'
import { connect } from 'react-redux'
import Creators from './redux/actionsCreators'

const Header = () => {
  return <h1>HEADER</h1>
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
