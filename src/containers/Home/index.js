import React from 'react'
import Heading from '../../components/Heading'
import { Container, ImageWrapper, MainImage } from './styles'
import dayImage from './assets/teaTime.jpg'
import nightImage from './assets/night.jpg'
import Info from './components/Info'
import Contact from './components/Contact'

const Home = () => {
  const time = () => {
    const today = new Date()
    const currTime = today.getHours()
    return currTime > 7 && currTime < 19
  }
  return (
    <Container>
      <Heading scroll="true"> Spencer Lee Tiberi </Heading>
      <ImageWrapper>
        <MainImage src={time() ? dayImage : nightImage} alt="Spencer" />
      </ImageWrapper>
      <Info />
      <Contact />
    </Container>
  )
}

export default Home
