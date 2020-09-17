import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import gen1 from '../Pokemon/gen1'

import HomePage from './Components/Pages/HomePage'
import GamePage from './Components/Pages/GamePage'
// import WinPage from './Components/Pages/WinPage'
// import LossPage from './Components/Pages/LossPage'
// import QuitPage from './Components/Pages/QuitPage'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/GamePage" component={GamePage} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
