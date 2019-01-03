import React from 'react'
import {
  Container,
  Dates,
  Degree,
  Description,
  Row,
  University
} from '../styles'

const EducationEntry = ({ university, children, degree, graduation }) => (
  <Container>
    <Row>
      <University>{university}</University>
      <Dates>{graduation} </Dates>
    </Row>
    <Degree>{degree}</Degree>
    <Description>{children}</Description>
  </Container>
)

export default EducationEntry
