import React from 'react' 
import Pokelose3 from '../../Images/pokelose3.gif'

import { Link } from 'react-router-dom'

class LosePage3 extends React.Component {
  render () {
    return (
      <section>
        <div>
          <h1 className="title is-1 has-text-centered has-text-black">
            Oh No! That was Wrong!
          </h1>
          <figure className="image-is-128x128 is-center">
            <img src={Pokelose3} alt="pokelose"/>
          </figure>
        </div>
        <div>
          <Link to="/GamePage3" className="button is-medium is-success is-light has-border-white">Play Again</Link>
          <Link to="/" className="button is-medium is-danger is-light has-border-white">Homepage</Link>
        </div>
      </section>
    )
  }
}
export default LosePage3