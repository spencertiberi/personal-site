import React, { Component } from 'react'
import Heading from '../../components/Heading'
import JobEntry from './components/JobEntry'
import EducationEntry from './components/EducationEntry'
import { Container, Entries, Title } from './styles'

class Portfolio extends Component {
  render() {
    return (
      <Container>
        <Heading> {`Stuff I've Made`} </Heading>
        <Entries alt>
          <Title alt>Programming</Title>
          <JobEntry
            title="Engineering Manager"
            start="July 2018"
            company="Harvard University"
            alt
          >
            {`I used to teach computer science at this school. I also worked in the robots lab. It was cool times, bruh. What say you? I think you have had some cool experiences too! I bet you have. Damn, you're so cool! I now build stuff and help others build stuff in useful ways.`}
          </JobEntry>
          <JobEntry
            title="Computer Science Faculty"
            start="August 2017"
            end="July 2018"
            company="Belmont Hill School"
            alt
          >
            {`I used to teach computer science at this school. I also worked in the robots lab. It was cool times, bruh. What say you? I think you have had some cool experiences too! I bet you have. Damn, you're so cool! I now build stuff and help others build stuff in useful ways.`}
          </JobEntry>
        </Entries>
        <Entries>
          <Title>Music</Title>
          <EducationEntry
            university="Harvard University"
            graduation="May 2017"
            degree="Masters of Liberal Arts (A.L.M.)"
          >
            {`I used to teach computer science at this school. I also worked in the robots lab. It was cool times, bruh. What say you? I think you have had some cool experiences too! I bet you have. Damn, you're so cool! I now build stuff and help others build stuff in useful ways.`}
          </EducationEntry>
          <EducationEntry
            university="University of Nevada, Las Vegas"
            graduation="May 2013"
            degree="Bachelors of Science (B.S.)"
          >
            {`I used to teach computer science at this school. I also worked in the robots lab. It was cool times, bruh. What say you? I think you have had some cool experiences too! I bet you have. Damn, you're so cool! I now build stuff and help others build stuff in useful ways.`}
          </EducationEntry>
        </Entries>
      </Container>
    )
  }
}

export default Portfolio
