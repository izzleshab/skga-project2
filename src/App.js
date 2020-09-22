import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import HomePage from './Components/Pages/HomePage'
import GamePage1 from './Components/Pages/GamePage1'
import WinPage from './Components/Pages/WinPage'
import WinPage2 from './Components/Pages/WinPage2'
import WinPage3 from './Components/Pages/WinPage3'
import LosePage from './Components/Pages/LosePage'
import LosePage2 from './Components/Pages/LosePage2'
import LosePage3 from './Components/Pages/LosePage3'
import GamePage2 from './Components/Pages/GamePage2'
import GamePage3 from './Components/Pages/GamePage3'


const App = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/GamePage1" component={GamePage1} />
        <Route path ="/GamePage2" component={GamePage2} />
        <Route path ="/GamePage3" component={GamePage3} />
        <Route path="/WinPage" component={WinPage} />
        <Route path="/WinPage2" component={WinPage2} />
        <Route path="/WinPage3" component={WinPage3} />
        <Route path="/LosePage" component={LosePage} />
        <Route path="/LosePage2" component={LosePage2} />
        <Route path="/LosePage3" component={LosePage3} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
