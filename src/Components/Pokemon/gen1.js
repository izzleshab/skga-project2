import React from 'react'

import { getAllPokemon } from '../../lib/api'

class gen1 extends React.Component {
  state = {
    pokemon: []
  }

  async getPokemon() {
    const response = await getAllPokemon()

    this.setState({
      pokemon: response.data
    })
    console.log(this.state.pokemon)
  }



  render() {
    if ( !this.state.pokemon ) return null
    return (
      <div className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div>hello</div>
          </div>
        </div>
      </div>
    )
  }

}

export default gen1