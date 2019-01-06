import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Bio, Container, Pic, Text } from './styles'
import ProfilePic from './Snowboarding.jpg'

class About extends Component {
  render() {
    return (
      <Container>
        <Heading> About ティベリさん </Heading>
        <Bio>
          <span>
            <Pic src={ProfilePic} alt="Spencer" />
          </span>
          <Text>
            Spencer Lee Tiberi was born on March 29th, 1991 in <s>Sparks</s> Las
            Vegas, Nevada. He grew up in the southwestern Las Vegas suburb of
            Enterprise, frequently alternating between exploring his desert
            habitat and venturing into virtual worlds on his Nintendo 64. As a
            fun juxtaposition to Las Vegas summers, he started snowboarding at
            the age of 8. After a high school experience spent dabbling in
            creating music and playing bass guitar, he graduated from the
            University of Nevada, Las Vegas in 2013 with a BS in Secondary
            Education - Mathematics and a minor in Psychology (Why though? - A
            advanced degree in Psychology may be required to figure this one
            out). He quickly jumped into teaching Mathematics at Mojave High
            School in North Las Vegas and later at Durango High School closer to
            home in Enterprise. After four years of teaching in his hometown, he
            graduated from Harvard Extension School with a Master of Liberal
            Arts in Mathematics for Teaching and moved out to the Boston area to
            teach Computer Science at Belmont Hill School utilizing Harvard’s
            CS50 curriculum. He now works as an Engineering Manager at Harvard,
            helping undergrads develop web and mobile apps for entrepreneurial
            clients. To this day, he still plays bass guitar, snowboards, plays
            video games, and explores his habitat (desert or otherwise).
          </Text>
        </Bio>
      </Container>
    )
  }
}

export default About
