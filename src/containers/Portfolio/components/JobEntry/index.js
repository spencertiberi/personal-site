import React from 'react'
import { Company, Container, Dates, Description, Row, Title } from '../styles'

const ResumeEntry = ({ title, children, company, start, end, alt }) => (
  <Container alt={alt}>
    <Row>
      <Title>{title}</Title>
      <Dates alt={alt}>{`${start} ~ ${end || 'Present'}`} </Dates>
    </Row>
    <Company alt={alt}>{company}</Company>
    <Description>{children}</Description>
  </Container>
)

export default ResumeEntry
