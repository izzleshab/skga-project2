import React from 'react'
import { Link } from 'react-router-dom'
import Pokehello from '../../Images/hello.gif'
// import Gen1 from './Components/Pokemon/gen1'


const HomePage = () => {
  return (
    <div className="section">
      <h1 className="title is-1 has-text-centered has-text-black">
        Welcome to Guess that Pokemon! 
      </h1>
      <h2 className="title is-3  has-text-centered has-text-black">
        Choose a difficulty!
      </h2>
      <figure className="imageis-140x140">
        <img src={Pokehello} alt="pokehello"/>
      </figure>
      <div>
        <Link to="/GamePage" className="button is-large is-link">Easy</Link>
        <Link to="/GamePage" className="button is-large is-warning">Medium</Link>
        <Link to="/GamePage" className="button is-large is-danger">Hard</Link>
      </div>   
    </div>
  )
}
export default HomePage