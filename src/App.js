import React from 'react'
import { Container } from 'semantic-ui-react'

import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin'
import Restrito from './screens/Restrito'

import store from './redux'
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={Admin} />
          <Route path='/restrito' component={Restrito} />
          <Route path='/login' component={Login} />
        </Container>
      </Router>
    </Provider>
  )
}

export default App
