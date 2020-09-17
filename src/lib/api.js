import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2'

export const getAllPokemon = () => {
  return axios.get(`${baseUrl}/generation/1/`)
}