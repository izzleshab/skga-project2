import React from 'react'
import { Link } from 'react-router-dom'
import Pokehello from '../../Images/hello.gif'

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
        <Link to="/GamePage1" className="button is-large is-link is-light">Easy</Link>
        <Link to="/GamePage2" className="button is-large is-success is-light is-focus">Medium</Link>
        <Link to="/GamePage3" className="button is-large is-danger is-light">Hard</Link>
      </div>   
    </div>
  )
}
export default HomePage