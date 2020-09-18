import axios from 'axios'


const baseUrl = 'https://pokeapi.co/api/v2/pokemon'


const randomNum = Math.floor(Math.random() * 151)
console.log(randomNum)
export const getPokemon = () => {
  return axios.get(`${baseUrl}/${randomNum}/`)
}


// export const getAllPokeUrl = () => {
//   return axios.get(`${props.allPokemonList.map(pokemon => pokemon.url)}`)
// }