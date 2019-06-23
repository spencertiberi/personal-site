import React from 'react'
import {
  Container,
  Dates,
  Degree,
  Description,
  Row,
  University,
  Info
} from '../styles'

const EducationEntry = ({
  university,
  children,
  degree,
  graduation,
  alt,
  offset
}) => (
  <Container alt={alt} offset={offset}>
    <Info>
      <Row>
        <University alt={alt}>{university}</University>
        <Dates alt={alt}>{graduation} </Dates>
      </Row>
      <Degree alt={alt}>{degree}</Degree>
      <Description alt={alt}>{children}</Description>
    </Info>
  </Container>
)

export default EducationEntry
