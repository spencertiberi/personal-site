import React from 'react'
import {
  Container,
  Dates,
  Degree,
  Description,
  Row,
  University
} from '../styles'

const EducationEntry = ({ university, children, degree, graduation, alt }) => (
  <Container>
    <Row>
      <University>{university}</University>
      <Dates alt={alt}>{graduation} </Dates>
    </Row>
    <Degree alt={alt}>{degree}</Degree>
    <Description>{children}</Description>
  </Container>
)

export default EducationEntry
