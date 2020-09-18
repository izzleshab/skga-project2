import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/pokemon'

// EASY MODE

export const getPokemon = () => {
  const randomNum = Math.ceil(Math.random() * 151)
  return axios.get(`${baseUrl}/${randomNum}/`)
}

export const getPokemonRandomArray = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=151')
}

// MEDIUM MODE

export const getPokemon2 = () => {
  const randomNum = Math.ceil(Math.random() * 251)
  return axios.get(`${baseUrl}/${randomNum}/`)
}

export const getPokemonRandomArray2 = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=251')
}