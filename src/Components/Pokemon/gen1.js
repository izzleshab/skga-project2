import React from 'react'

import { Link } from 'react-router-dom'
import { getPokemon } from '../../lib/api'

export class Gen1 extends React.Component {
  state = {
    allPokemonList: [],
    pokemon: '',
    pokeImage: null
  }

  async componentDidMount() {
    const pokemonListResponse = await getPokemon()
    const pokeName = pokemonListResponse.data.name
    const pokeImage = pokemonListResponse.data.sprites.other["official-artwork"].front_default
  
    this.setState({
      pokemon: pokeName,
      pokeImage: pokeImage
    })

    component.forceUpdate(callback)
  }
  // window.location.reload()

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }


  render() {
    const { pokeImage, pokemon } = this.state
    if ( !this.state ) return null
    return (
      <section>
        <h1 className="title is-1 has-text-centered has-text-black"> 
          Click the name of the Pokemon below!</h1>
        <div style={{ textAlign: 'center' }}>
          <img src={pokeImage} alt="thth"/>
        </div>
        <Link to="/WinPage" className="button is-large is-primary is-light has-border-white">{this.capitalize(pokemon)}</Link>
        <Link to="/WinPage" className="button is-large is-link is-light has-border-white">Pokemon #2</Link>     
        <Link to="/LosePage" className="button is-large is-success is-light has-border-white">Pokemon #3</Link>
        <Link to="/LosePage" className="button is-large is-warning is-light has-border-white">Pokemon #4</Link>

        <div>
          <Link to="/" className="button is-medium is-center is-link has-border-white">HomePage
          </Link>
        </div>
      </section>
    )
  } 
}

export default Gen1