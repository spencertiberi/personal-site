import React from 'react'
import Heading from '../../components/Heading'
import ProjectCard from './components/ProjectCard'
import { Container, Cards } from './styles'

const Projects = () => (
  <Container>
    <Heading> {`What I'm Working On`} </Heading>
    <Cards>
      <ProjectCard
        link="/projects/formerstrangers"
        title="Former Strangers"
        description="I ask random strangers to take selfies with me with the hope that they will no longer be strangers."
      />
      <ProjectCard
        link="/"
        title="This Website"
        description="Pretty meta, huh?"
      />
    </Cards>
  </Container>
)

export default Projects
