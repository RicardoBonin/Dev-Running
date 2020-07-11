/* eslint-disable react/prop-types */
import React from 'react'
import { Route, Link } from 'react-router-dom'

const Home = () => <h1>Home admin</h1>
const Users = () => <h1>Users admin</h1>

const Admin = (props) => (
  <div>
    <h1>Admin</h1>
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

export default Admin
