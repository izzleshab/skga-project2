import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './Components/Pages/HomePage'
// import GamePage from './Components/Common/GamePage'
// import WinPage from './Components/Common/WinPage'
// import LossPage from './Components/Common/LossPage'
// import QuitPage from './Components/Common/QuitPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
