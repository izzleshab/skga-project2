import React from 'react' 
import Pokewin from '../../Images/pokewin.gif'

import { Link } from 'react-router-dom'



class WinPage extends React.Component {
  render () {

    return (
      <section>
        <div className="section is-center">
          <h1 className="title is-1 has-text-centered has-text-black">
            Well Done! You did it!
          </h1>
          <div>
            <figure className="image-is-100x100">
              <img src={Pokewin} alt="pokewin"/>
            </figure>
            <Link to="/GamePage" className="button is-medium is-danger is-light has-border-white">Play Again</Link>
            <Link to="/" className="button is-medium is-center is-link has-border-white">Back to the Homepage</Link>
          </div>
        </div>
      </section>
    )
  }
}
export default WinPage