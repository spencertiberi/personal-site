import React, { Component } from 'react'
import Heading from '../../components/Heading'
import { Container } from './styles'

class Blog extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }
  render() {
    return (
      <Container>
        <Heading>Recent Musings</Heading>
        <div>{this.state.posts}</div>
      </Container>
    )
  }
}

export default Blog
