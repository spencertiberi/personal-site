import React from 'react'
import { Container, Header } from './styles'

const Heading = ({ children }) => (
  <Container>
    <Header>{children}</Header>
  </Container>
)

export default Heading
