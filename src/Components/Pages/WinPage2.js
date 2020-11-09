import React from 'react' 
import Pokewin2 from '../../Images/pokewin2.gif'
import { Link } from 'react-router-dom'

class WinPage2 extends React.Component {
  render () {
    return (
      <section>
        <div className="section is-center">
          <h1 className="title is-1 has-text-centered has-text-black">
            Well Done! You did it!
          </h1>
          <div>
            <figure className="image-is-100x100">
              <img src={Pokewin2} alt="pokewin2"/>
            </figure>
            <Link to="/GamePage2" className="button is-medium is-success is-light has-border-white">Play Again</Link>
            <Link to="/" className="button is-medium is-danger is-light has-border-white">Homepage</Link>
          </div>
        </div>
      </section>
    )
  }
}
export default WinPage2