import React from 'react'
import { Link } from 'react-router-dom'
import Pokehello from '../../Images/hello.gif'
// import Gen1 from './Components/Pokemon/gen1'


const HomePage = () => {
  return (
  // console.log({ Gen1 }),

    <div className="box-background-color-is-green">

      <h1 className="title is-1 has-text-centered has-text-black">
        Welcome to Guess that Pokemon! 
      </h1>

      <h2 className="header is-strong">
        Choose a difficulty!
      </h2>

      <Link to="/GamePage" className="button is-large is-center is-black has-border-white">Easy
      </Link>

      {/* <button className="button is-large is-center is-black">Medium</button>

      <button className="button is-large is-center is-black">Hard</button> */}

      <figure className="image-is-128x128 is-center">
        <img src={Pokehello} alt="pokehello"/>
      </figure>

    </div>
  )
}
export default HomePage