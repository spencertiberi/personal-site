import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container, MainImage } from './styles'
import backgroundImage from './SpringMountains.jpg'
import Info from './components/Info'

class Home extends Component {
  render() {
    return (
      <Container>
        <Heading scroll> Spencer Tiberi </Heading>
        <MainImage src={backgroundImage} alt="Spencer" />
        <Info />
      </Container>
    )
  }
}

export default Home
