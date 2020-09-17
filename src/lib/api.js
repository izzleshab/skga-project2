import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'
const pokeImages = 'https://github.com/PokeAPI/sprites/tree/master/sprites/pokemon'

export const getAllPokemon = () => {
  return axios.get(`${baseUrl}/generation/1/`)
}

export const getAllPokeImages = () => {
  return axios.get(`${pokeImages}`)
}