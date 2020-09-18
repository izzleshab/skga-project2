import React from 'react'
import { Link } from 'react-router-dom'

import Gen1 from '../Pokemon/Gen1'


class GamePage extends React.Component {

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

export default GamePage