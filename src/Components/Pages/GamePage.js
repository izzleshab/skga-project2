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

        <Link to="/GamePage" className="button is-large is-center is-black has-border-white">Easy
        </Link>

      

      </section>
    )
  }
}

export default GamePage