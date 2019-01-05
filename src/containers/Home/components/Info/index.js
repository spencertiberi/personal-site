import React from 'react'
import { Container, Title, Top, Paragraph, Overview } from './styles'

const Info = () => (
  <Container>
    <Top>
      <Title> {`Hi, I'm Spencer!`} </Title>
      <Paragraph>
        {`Here is some info about me! I'm super interesting, I promise!`}
      </Paragraph>
    </Top>
    <Overview />
  </Container>
)

export default Info
