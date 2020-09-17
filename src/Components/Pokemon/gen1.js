import React from 'react'

import { getAllPokemon } from '../../lib/api'

class Gen1 extends React.Component {
  state = {
    allPokemon: []
  }

  async componentDidMount() {
    const response = await getAllPokemon()

    this.setState({
      allPokemon: response.data
    })
    console.log(this.state.allPokemon.pokemon_species)
  }



  render() {
    if ( !this.state.allPokemon.pokemon_species ) return null
    return (
      <div>
        { this.state.allPokemon.pokemon_species.map(pokemon => (
          <div key={pokemon.name}>
            {pokemon.name}
          </div>
        )) }
      </div>
    )
  }

}

export default Gen1