import React from 'react'
import Gen3 from '../Pokemon/Gen3'

class GamePage3 extends React.Component {
  state = {
    optionData: {
      name: ''
    }
  }

  render () {

    return (
      <Gen3 />
    )
  }
}

export default GamePage3