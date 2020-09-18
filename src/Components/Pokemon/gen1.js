import React from 'react'


import { getPokemon } from '../../lib/api'

export class Gen1 extends React.Component {
  state = {
    allPokemonList: [],
    pokemon: '',
    pokeImage: null
  }

  async componentDidMount() {
    // const listResponse = await getAllPokemon() // Getting the pokemon list
    // const species = listResponse.data.pokemon_species
    // console.log(species)
    
    // //   const imagesResponse = await getAllPokeImages() // Getting the pokemon images
    // //   this.setState({
    // //     pokemonImages: imagesResponse.data
    // //   })
    // //   console.log(this.state.pokemonImages)
    // // }
    
    // const randNum = Math.floor(Math.random() * species.length)
    // console.log(randNum)
    // const pokemonUrl = species[randNum].url
    // console.log(pokemonUrl)
    // const pokemon = await getSinglePokemon(pokemonUrl)
    // this.setState({
    //   pokemon: pokemon.data
    // })
      
    const pokemonListResponse = await getPokemon()
    console.log(pokemonListResponse.data)
    const pokeName = pokemonListResponse.data.name
    const pokeImage = pokemonListResponse.data.sprites.other["official-artwork"].front_default
    console.log(pokeName)
    console.log(pokeImage)
    const pokemonWhole = pokeName + ' ' + pokeImage
    console.log(pokemonWhole)
    this.setState({
      pokemon: pokeName,
      pokeImage: pokeImage
    })
    // this.state.pokemon.toLowerCase().split(' ').map(letter => letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ') // Tried to capitalize the first letter of the whole array
    
    // const randomNum = Math.floor(Math.random() * 151)  // The array doesn't contain all the pokemon, the api does
    
    // const pokemonCathed = await getPokemon(randNum)
  }

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  render() {
    const { pokeImage, pokemon } = this.state
    if ( !this.state ) return null
    return (
      <div>
        <div style={{ textAlign: 'center' }}>
          <img src={pokeImage} alt="getThatShit"/>
        </div>
        <div style={{ textAlign: 'center' , border: '1px solid black' }}>
          {this.capitalize(pokemon)}
        </div>
      </div>
    )
  }

}

export default Gen1