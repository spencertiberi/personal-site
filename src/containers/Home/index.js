import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container, ImageWrapper, MainImage } from './styles'
import backgroundImage from './TeaTime.jpg'
import Info from './components/Info'

class Home extends Component {
  render() {
    return (
      <Container>
        <Heading scroll> Spencer Lee Tiberi </Heading>
        <ImageWrapper>
          <MainImage src={backgroundImage} alt="Spencer" />
        </ImageWrapper>
        <Info />
      </Container>
    )
  }
}

export default Home
