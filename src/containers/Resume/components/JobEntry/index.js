import React from 'react'
import { Company, Container, Dates, Description, Row, Title } from '../styles'

const ResumeEntry = ({ title, children, company, start, end }) => (
  <Container>
    <Row>
      <Title>{title}</Title>
      <Dates>{`${start} ~ ${end || 'Present'}`} </Dates>
    </Row>
    <Company>{company}</Company>
    <Description>{children}</Description>
  </Container>
)

export default ResumeEntry
