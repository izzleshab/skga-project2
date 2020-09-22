import React from 'react'
import { Link } from 'react-router-dom'
import { getPokemon2, getPokemonRandomArray2 } from '../../lib/api'

class Gen2 extends React.Component {
  state = {
    allPokemonList: [],
    pokemon: '',
    pokeImage: null,
    arrayNames: []
  }

  async componentDidMount() {
    const pokemonListResponse = await getPokemon2()
    const pokeName = pokemonListResponse.data.name
    const pokeImage = pokemonListResponse.data.sprites.other['official-artwork'].front_default
    
    const pokemonArrayResponse = await getPokemonRandomArray2()
    const allPokemonList = pokemonArrayResponse.data.results.name
    
    this.setState({
      pokemon: pokeName,
      pokeImage: pokeImage,
      allPokemonList: allPokemonList
    })
    
    const randomNameGen = () => {
      return Math.ceil(Math.random() * 251)
    }

    const randomName = []
    for (let i = 0; i < 3; i++) {
      randomName.push({
        correct: false,
        name: pokemonArrayResponse.data.results[randomNameGen()].name,
        classNames: 'button is-large is-primary is-light has-border-black"'
      })
    }
    randomName.unshift({
      correct: true,
      name: pokeName,
      classNames: 'button is-large is-primary is-light has-border-black"'
    })
    console.log(randomName)
    const randomButtonSorted = randomName.sort(() => Math.random() - 0.5)
    console.log(this.state.arrayNames)
    this.setState({
      arrayNames: randomButtonSorted
    })
  }

  capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const { pokeImage } = this.state
    if ( !this.state ) return null
    return (
      <section>
        <h1 className="title is-1 has-text-centered has-text-black"> 
          Click the name of the Pokemon below!</h1>
        <div style={{ textAlign: 'center' }}>
          <img src={pokeImage} alt="LOADING POKEMON"/>
        </div>
        <div>
          {this.state.arrayNames.map(obj => {
            return ( 
              obj.correct ? 
                <Link to="/WinPage2" className={obj.classNames} id = "links">{this.capitalize(obj.name)}</Link>
                :
                <Link to="/LosePage2" className={obj.classNames} id = "links">{this.capitalize(obj.name)}</Link>
            )
          })}
        </div>
      </section>
    )
  } 
}

export default Gen2