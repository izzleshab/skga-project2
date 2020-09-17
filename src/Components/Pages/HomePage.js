import React from 'react'

import { getAllPokemon } from '../../lib/api'

const HomePage = () => {

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1 has-text-centered has-text-black">
            Guess that Pokemon! 
            
          </h1>
        </div>
      </div>
    </section>
  )


}
export default HomePage