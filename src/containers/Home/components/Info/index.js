import React from 'react'
import { Container, Text, Title, Paragraph } from './styles'
import copy from '../../../../copy'

const Info = () => (
  <Container>
    <Title> {copy.hello} </Title>
    <Paragraph>
      <Text>{copy.bio}</Text>
    </Paragraph>
  </Container>
)

export default Info
