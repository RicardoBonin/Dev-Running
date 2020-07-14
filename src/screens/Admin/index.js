/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const Home = () => <h1>Home admin</h1>
const Users = () => <h1>Users admin</h1>

const Admin = (props) => {
  if (!props.auth.isAuth) {
    return <Redirect to='/login' />
  }
  if (props.auth.user.role !== 'admin') {
    return <Redirect to='/restrito' />
  }
  return (
    <div>
      <h1>Admin</h1>
      <pre>{JSON.stringify(props.auth)}</pre>
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

export default connect(mapStateToProps)(Admin)
