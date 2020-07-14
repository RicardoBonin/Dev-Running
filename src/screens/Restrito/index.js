/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect, Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const Restrito = (props) => {
  console.log(props)
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  return (
    <div>
      <h1>Restrito</h1>
      <p>
        <Link to='/admin'>Home</Link>
        <Link to='/admin/users'>Users</Link>
      </p>
      <div>
        <Route path={`${props.match.path}/`} exact component={Home} />
        <Route path={`${props.match.path}/users`} component={Users} />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  }
}
export default connect(mapStateToProps)(Restrito)
