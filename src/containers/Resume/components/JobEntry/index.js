import React from 'react'
import {
  Company,
  Container,
  Dates,
  Description,
  Row,
  Title,
  Info
} from '../styles'

const ResumeEntry = ({ title, children, company, start, end, alt, offset }) => (
  <Container alt={alt} offset={offset}>
    <Info>
      <Row>
        <Title alt={alt}>{title}</Title>
        <Dates alt={alt}>{`${start} ~ ${end || 'Present'}`} </Dates>
      </Row>
      <Company alt={alt}>{company}</Company>
      <Description alt={alt}>{children}</Description>
    </Info>
  </Container>
)

export default ResumeEntry
