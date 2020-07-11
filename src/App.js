import React from 'react'

import _JSXStyle from 'styled-jsx/style'

import Header from './Header'
import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin'
import Restrito from './screens/Restrito'

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

  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/restrito' component={Restrito} />
          <Route path='/login' component={Login} />
          <Header />
          <_JSXStyle id='App'>{`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
          `}</_JSXStyle>
        </div>
      </Router>
    </Provider>
  )
}

export default App
