import React from 'react'
import { Link } from 'react-router-dom'


class GamePage extends React.Component {

  state = {
    optionData: {
      name: ''
    }
  }

  render () {

    return (
      <section>
        <h1 className="title is-1 has-text-centered has-text-black"> 
        Click the name of the Pokemon below!</h1>

        <Link to="/WinPage" className="button is-large is-center is-black has-border-white">Pokemon #1
        </Link> 
        
        <Link to="/WinPage" className="button is-large is-center is-black has-border-white">Pokemon #2
        </Link> 
        
        <Link to="/LosePage" className="button is-large is-center is-black has-border-white">Pokemon #3
        </Link>
        
        <Link to="/LosePage" className="button is-large is-center is-black has-border-white">Pokemon #4
        </Link>

        <div>
          <Link to="/" className="button is-medium is-center is-link has-border-white">HomePage
          </Link>
        </div>

      </section>
    )
  }
}

export default GamePage