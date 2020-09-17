import React from 'react'

import Pokehello from '../../Images/hello.gif'

// import gen1 from '../Pokemon/gen1'

const HomePage = () => {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered has-text-black">
            Guess that Pokemon! 
          </h1>
          <h2 className="header is-strong">
            Choose a difficulty!
          </h2>
          <button className="button is-large is-center is-black">Easy</button>
          <img src={Pokehello} alt="pokehello"/>
        </div>
      </div>
    </section>
  )
}
export default HomePage