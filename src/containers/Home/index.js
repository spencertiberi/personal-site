import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container, ImageWrapper, MainImage } from './styles'
import dayImage from './assets/teaTime.jpg'
import nightImage from './assets/night.jpg'
import Info from './components/Info'
import Contact from './components/Contact'

class Home extends Component {
  time = () => {
    const today = new Date()
    const time = today.getHours()
    return time > 7 && time < 19
  }
  render() {
    return (
      <Container>
        <Heading scroll="true"> Spencer Lee Tiberi </Heading>
        <ImageWrapper>
          <MainImage src={this.time() ? dayImage : nightImage} alt="Spencer" />
        </ImageWrapper>
        <Info />
        <Contact />
      </Container>
    )
  }
}

export default Home
