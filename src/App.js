import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import gen1 from '../Pokemon/gen1'

import HomePage from './Components/Pages/HomePage'
import GamePage1 from './Components/Pages/GamePage1'
import WinPage from './Components/Pages/WinPage'
import LosePage from './Components/Pages/LosePage'
import GamePage2 from './Components/Pages/GamePage2'


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/GamePage1" component={GamePage1} />
        <Route path="/WinPage" component={WinPage} />
        <Route path="/LosePage" component={LosePage} />
        <Route path ="/GamePage2" component={GamePage2} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
