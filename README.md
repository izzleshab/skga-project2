# Guess That Pokemon! - GA Project Two 

My second project as part of the Software Engineering Immersive course - A React app pair-coded with my GA classmate [Giacinto A.](githublink) for the 48-hour GA hackathon.

Guess That Pokemon! was deployed with Netlify and is available [here](https://izzleshab-project-2.netlify.app/).

## Brief: 

Build a React application that consumes any public API within a 48-hour timeframe. 

## Technologies Used:

- React.js
- JavaScript
- HTML 5
- SCSS
- PokeAPI
- Axios
- Insomnia
- Yarn 
- React-router-dom
- Bulma 

## Demonstration of the App

![Guess-That-Pokemon-API-Quiz](./src/images/GTP-demo.gif)

***

The quiz makes one of three API calls dependent on which difficulty is selected. After selecting a difficulty, the user is presented with a Pokemon and a series of names, one of which matches the Pokemon and the remainder leading to the 'game loss' page if clicked. If the correct Pokemon is clicked the user is taken to the 'game win' page where they can play again or return to the home page to select a new difficulty. 

## Process

We began by discussing what sort of API we would like to use, and as both of us are fans of Pokemon since our childhood we decided to use the PokeAPI very early on. The PokeAPI boasts an impressive 932 Pokemon. Each pokemon is filled with subdata which includes names, type, moves, sprites etc. 

For this project we opted to use the first generation of 151 Pokemon for the 'easy' difficulty. The 'medium' difficulty adds an additional 100 pokemon from the second generation of Pokemon. The 'hard' difficulty adds an additional 135 Pokemon from generation three. 

We then took the following steps to produce the app:

- We produced hand drawn wireframes for the home page, question page, win page and loss page to guide the development process
- We produced the required pages as React components.
- We used React-router-dom to link between our various pages seemlessly.
- We produced the game logic
- We added light styling using a combination of Bulma and SCSS.

## API Requests

As our application required several calls to be made from the same API, we elected to use two seperate API calls per difficulty. The first would call a random Pokemon from the API with a Pokemon number between 1 and 151.

```JavaScript
export const getPokemon = () => {
  const randomNum = Math.ceil(Math.random() * 151)
  return axios.get(`${baseUrl}/${randomNum}/`)
}
```

The second call retrieves random pokemon, limited to only the first 151 pokemon which composes the incorrect options the user can see after selecting a difficulty. 

```JavaScript
export const getPokemonRandomArray = () => {
  return axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=151')
}
```

This concept was repeated for the medium and hard difficulties. 

## Quiz Logic 

A class component was made for each generation of Pokemon. Within the lifecycle mothod of the class component the getPokemon() request and getPokemonRandomArray() request were awaited.

The name and sprite of the displayed Pokemon were retrieved from the API for getPokemon(). This is the Pokemon the user sees and wants to guess correctly. 

For the second request, only the name was retrieved from the API, which was then passed into an empty array in state called 'arrayNames' and used as the 'incorrect' options for the user to see. 

```JavaScript
  state = {
    allPokemonList: [],
    pokemon: '',
    pokeImage: null,
    arrayNames: []
  }

  async componentDidMount() {
    const pokemonListResponse = await getPokemon()
    const pokeName = pokemonListResponse.data.name
    const pokeImage = pokemonListResponse.data.sprites.other['official-artwork'].front_default
    
    const pokemonArrayResponse = await getPokemonRandomArray()
    const allPokemonList = pokemonArrayResponse.data.results.name
```

To display the incorrect Pokemon names, a combination of a random name generating function and a for loop were used. These functions select a random name from the 151 Pokemon, and gets looped through 3 times to produce 3 names, for a total of 4 options for the user. 

```JavaScript
    const randomNameGen = () => {
      return Math.ceil(Math.random() * 151)
    }

    const randomName = []
    for (let i = 0; i < 3; i++) {
      randomName.push({
        correct: false,
        name: pokemonArrayResponse.data.results[randomNameGen()].name,
        classNames: 'button is-large is-primary is-light has-border-black"'
      })
    }
```
Within our render method, we utilised a ternary operator to determine whether the correct Pokemon was selected or not, and based upon this selection, the user would be taken to the 'win page' or the 'lose page'

Additionally, some polish was added in the form of capitalizing the first letter in every Pokemon's name, as they rendered would be rendered in lowercase. 

```JavaScript
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
                  <Link to="/WinPage" className={obj.classNames} id = "links">{this.capitalize(obj.name)}</Link>
                  :
                  <Link to="/LosePage" className={obj.classNames} id = "links">{this.capitalize(obj.name)}</Link>
              )
            })}
          </div>
        </section>
      )
    } 
```

The Generation 1 functional component was then imported onto the game page for 'easy' difficulty. 

```JavaScript
class GamePage1 extends React.Component {
  state = {
    optionData: {
      name: ''
    }
  }

  render () {

    return (
      <Gen1 />
    )
  }
}
```

## Challenges

Making two seperate axios calls and ensuring the URL's for both were correct was tricky for us to understand. Additionally, getting the incorrect Pokemon names to render and be called correctly took a large amount of our time. We did not initially opt to use a for loop with alongside the Math.random method, which lead to 3 identical names being retrieved. The inclusion of the for loop allowed for 3 seperate Pokemon names to be retrieved.


## Wins

Working through our challenges to find working solutions were great wins for my partner and I. Working in a pair and having someone else to bounce ideas off and discuss methods of creating the app was very beneficial for my learning. 


## Future features

As this was a hackathon, the time alotted to compelete the app was very short, thus lots of features we wanted implemented had to be cut from the app to meet the final deadline. The future feature I am most interested in implementing is a score system, where a user can visually see their score as they engage with the app.
