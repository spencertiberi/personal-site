import React from 'react'
import { Container, Text, Title, Paragraph, Pic } from './styles'
import ProfilePic from './Snowboarding.jpg'
import copy from '../../../../copy'

const Info = () => (
  <Container>
    <Title> {copy.hello} </Title>
    <Paragraph>
      <span>
        <Pic src={ProfilePic} alt="Spencer" />
      </span>
      <Text>{copy.bio}</Text>
    </Paragraph>
  </Container>
)

export default Info
