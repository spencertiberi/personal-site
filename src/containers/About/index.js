import React from 'react'
import Heading from '../../components/Heading'
import { Bio, Container, Pic, Text } from './styles'
import ProfilePic from './Snowboarding.jpg'
import copy from '../../copy'

const About = () => (
  <Container>
    <Heading> About Me </Heading>
    <Bio>
      <span>
        <Pic src={ProfilePic} alt="Spencer" />
      </span>
      <Text>{copy.bio}</Text>
    </Bio>
  </Container>
)

export default About
