import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import UserPage from '../pages/UserPage'
import Header from './Header'
import { Route, Switch } from 'react-router'
import ErrorPage from '../pages/ErrorPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/:id">
          <UserPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
