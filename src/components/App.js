import Header from './Header'
import React from 'react'
import Body from './Body'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/:id">
          <Body />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
