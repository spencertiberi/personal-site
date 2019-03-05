import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container, MainImage } from './styles'
import backgroundImage from './TeaTime.jpg'
import Info from './components/Info'
import LazyLoad from 'react-lazy-load'

class Home extends Component {
  render() {
    return (
      <Container>
        <Heading scroll> Spencer Lee Tiberi </Heading>
        <LazyLoad height={400}>
          <MainImage src={backgroundImage} alt="Spencer" />
        </LazyLoad>
        <Info />
      </Container>
    )
  }
}

export default Home
