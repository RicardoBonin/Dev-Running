/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Runs from './Runs'
import Header from './elements/Header'

const Restrito = (props) => {
  console.log(props)
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  return (
    <div>
      <Header />

      <Route path={`${props.match.path}/`} exact component={Home} />
      <Route path={`${props.match.path}/runs`} component={Runs} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}
export default connect(mapStateToProps)(Restrito)
