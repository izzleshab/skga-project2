import React from 'react'
import Gen1 from '../Pokemon/Gen1'

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

export default GamePage1