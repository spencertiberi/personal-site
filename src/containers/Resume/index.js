import React, { Component } from 'react'
import Heading from '../../components/Heading'
import JobEntry from './components/JobEntry'
import EducationEntry from './components/EducationEntry'
import { Container, Entries, Title } from './styles'

class Resume extends Component {
  render() {
    return (
      <Container>
        <Heading> {`Stuff I've Done`} </Heading>
        <Entries alt="true">
          <Title alt="true">Experience</Title>
          <JobEntry
            title="Engineering Manager"
            start="July 2018"
            company="Harvard University"
            alt="true"
          />
          <JobEntry
            title="Teaching Fellow"
            start="August 2017"
            end="December 2018"
            company="Harvard University"
            alt="true"
          />
          <JobEntry
            title="Computer Science Faculty"
            start="August 2017"
            end="July 2018"
            company="Belmont Hill School"
            alt="true"
          />
          <JobEntry
            title="CS50 Summer Fellow"
            start="June 2017"
            end="August 2017"
            company="Harvard University"
            alt="true"
          />
          <JobEntry
            title="Math and Computer Science Teacher"
            start="August 2013"
            end="July 2017"
            company="Clark County School District"
            alt="true"
          />
        </Entries>
        <Entries>
          <Title>Education</Title>
          <EducationEntry
            university="Harvard University"
            graduation="May 2017"
            degree="Masters of Liberal Arts (A.L.M.)"
          />
          <EducationEntry
            university="University of Nevada, Las Vegas"
            graduation="May 2013"
            degree="Bachelors of Science (B.S.)"
          />
        </Entries>
      </Container>
    )
  }
}

export default Resume
