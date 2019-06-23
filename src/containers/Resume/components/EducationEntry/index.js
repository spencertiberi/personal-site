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
  <Container alt={alt}>
    <Row>
      <University alt={alt}>{university}</University>
      <Dates alt={alt}>{graduation} </Dates>
    </Row>
    <Degree alt={alt}>{degree}</Degree>
    <Description alt={alt}>{children}</Description>
  </Container>
)

export default EducationEntry
