import React from 'react' 
import Pokelose from '../../Images/pokelose.gif'

import { Link } from 'react-router-dom'

class LosePage extends React.Component {
  state = {

  }

  render () {
    return (
      <section>
        <div>
          <h1 className="title is-1 has-text-centered has-text-black">
            Oh No! That was Wrong!
          </h1>
          <figure className="image-is-128x128 is-center">
            <img src={Pokelose} alt="pokelose"/>
          </figure>
        </div>
        <div>
          <Link to="/GamePage" className="button is-medium is-center is-link has-border-white">Try Again</Link>
          <Link to="/" className="button is-medium is-center is-link has-border-white">Back to the Homepage</Link>
        </div>
      </section>
    )
  }
}
export default LosePage