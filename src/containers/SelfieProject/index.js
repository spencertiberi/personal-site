import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container, Text } from './styles'
import Instagram from './components/Instagram'

class SelfieProject extends Component {
  render() {
    return (
      <Container>
        <Heading>Strangers {`&`} Selfies</Heading>
        <Text>
          Taking selfies with strangers on Instagram once a day because why not?
        </Text>
        <Instagram />
      </Container>
    )
  }
}

export default SelfieProject
