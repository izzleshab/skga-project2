import React from 'react' 
import Pokewin3 from '../../Images/pokewin3.gif'
import { Link } from 'react-router-dom'

class WinPage3 extends React.Component {
  render () {
    return (
      <section>
        <div className="section is-center">
          <h1 className="title is-1 has-text-centered has-text-black">
            Well Done! You did it!
          </h1>
          <div>
            <figure className="image-is-100x100">
              <img src={Pokewin3} alt="pokewin"/>
            </figure>
            <Link to="/GamePage3" className="button is-medium is-success is-light has-border-white">Play Again</Link>
            <Link to="/" className="button is-medium is-danger is-light has-border-white">Homepage</Link>
          </div>
        </div>
      </section>
    )
  }
}
export default WinPage3