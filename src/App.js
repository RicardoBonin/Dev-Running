import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Header from './Header'
import store from './redux'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
function App() {
  // const getToken = async () => {
  //   let token = localStorage.getItem("token");
  //   if (!token) {
  //     const login = await axios.post("http://localhost:3001/users/login", {
  //       email: "tuliofaria@devpleno.com",
  //       passwd: "abc123",
  //     });
  //     token = login.data.token;
  //     localStorage.setItem("token", token);
  //   }
  //   const decoded = jwtDecode(token);
  //   console.log(decoded);

  //   const user = await axios.get("http://localhost:3001/users/me", {
  //     headers: {
  //       Authorization: "Bearer " + token,
  //     },
  //   });
  //   console.log(user)
  // };
  // useEffect(() => {
  //   getToken();
  // }, []);
  const Home = () => <h1>Home</h1>
  const Admin = () => <h1>Admin</h1>
  const Restrito = () => <h1>Restrito</h1>
  const Login = () => <h1>Login</h1>
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <Route path="/restrito" component={Restrito} />
          <Route path="/login" component={Login} />
          <Header />
        </div>
      </Router>
    </Provider>
  )
}

export default App
