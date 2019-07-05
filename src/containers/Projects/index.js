import React from 'react'
import Heading from '../../components/Heading'
import { Container, NavItem } from './styles'

const Projects = () => (
  <Container>
    <Heading> {`What I'm Working On`} </Heading>
    <NavItem to="/projects/formerstrangers">Former Strangers</NavItem>
    I take selfies with strangers, who are soon to be former strangers
    <NavItem to="/projects/formerstrangers">Former Strangers</NavItem>
    I take selfies with strangers, who are soon to be former strangers
    <NavItem to="/projects/formerstrangers">Former Strangers</NavItem>
    I take selfies with strangers, who are soon to be former strangers
  </Container>
)

export default Projects
