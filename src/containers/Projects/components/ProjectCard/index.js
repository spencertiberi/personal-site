import React from 'react'
import { Container, Title } from './styles'

const ProjectCard = ({ link, title, description }) => (
  <Container to={link}>
    <Title>{title}</Title>
    {description}
  </Container>
)

export default ProjectCard
