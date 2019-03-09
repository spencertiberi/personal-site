import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container, Image, Text } from './styles'
import InstagramTag from './former_strangers_nametag.png'

class SelfieProject extends Component {
  render() {
    return (
      <Container>
        <Heading>{`Strangers & Selfies`}</Heading>
        <Text>
          Taking selfies with strangers and asking them whats on their mind. :)
        </Text>
        <a
          href="https://www.instagram.com/former_strangers/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={InstagramTag} />
        </a>
      </Container>
    )
  }
}

export default SelfieProject
