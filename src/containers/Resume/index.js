import React from 'react'
import Heading from '../../components/Heading'
import JobEntry from './components/JobEntry'
import EducationEntry from './components/EducationEntry'
import { Container, Entries, Title } from './styles'

const Resume = () => (
  <Container>
    <Heading> {`Stuff I've Done`} </Heading>
    <Entries>
      <Title>Experience</Title>
      <JobEntry
        title="Product Manager"
        start="July 2018"
        company="Harvard University"
      >
        I manage HSA DEV, a student-run web and app design and development
        company
      </JobEntry>
      <JobEntry
        alt="true"
        title="Teaching Fellow"
        start="August 2017"
        end="December 2018"
        company="Harvard University"
      >
        {`I taught CS50, Harvard's introduction to comupter science course`}
      </JobEntry>
      <JobEntry
        title="Computer Science Faculty"
        start="August 2017"
        end="July 2018"
        company="Belmont Hill School"
      >
        I taught CS50 as an AP course, robotics, intro to Python, and sports
        analytics
      </JobEntry>
      <JobEntry
        alt="true"
        title="CS50 Summer Fellow"
        start="June 2017"
        end="August 2017"
        company="Harvard University"
      >
        I developed curriculum for CS50 AP, the high school adaptation of CS50
      </JobEntry>
      <JobEntry
        title="Math and Computer Science Teacher"
        start="August 2013"
        end="July 2017"
        company="Clark County School District"
      >
        I taught Algebra II Honors (affectionately known by students as A2H) and
        CS50 AP
      </JobEntry>
    </Entries>
    <Entries alt="true">
      <Title alt="true">Education</Title>
      <EducationEntry
        alt="true"
        university="Harvard University"
        graduation="May 2017"
        degree="Masters of Liberal Arts (A.L.M.)"
      >
        Coursework included CS50, game theory, geometry pedagogy, algebra
        pedagogy, and a thesis in alternative grading schemes for mathematics
      </EducationEntry>
      <EducationEntry
        university="University of Nevada, Las Vegas"
        graduation="May 2013"
        degree="Bachelors of Science (B.S.)"
      >
        Coursework included descrete mathematics, number theory, energy and
        resources, non-eucledan geometry, social psychology, and classroom
        management
      </EducationEntry>
    </Entries>
  </Container>
)

export default Resume
