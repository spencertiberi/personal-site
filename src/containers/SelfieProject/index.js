import React from 'react'
import Heading from '../../components/Heading'
import { Container, Text } from './styles'
import Instagram from './components/Instagram'

const SelfieProject = () => (
  <Container>
    <Heading>Strangers {`&`} Selfies</Heading>
    <Text>
      Taking selfies with strangers on Instagram once a day because why not?
    </Text>
    <Instagram />
  </Container>
)

export default SelfieProject
