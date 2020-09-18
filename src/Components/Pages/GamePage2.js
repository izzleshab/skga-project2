import React from 'react'
import Gen2 from '../Pokemon/Gen2'

class GamePage2 extends React.Component {
  state = {
    optionData: {
      name: ''
    }
  }

  render () {

    return (
      <Gen2 />
    )
  }
}

export default GamePage2