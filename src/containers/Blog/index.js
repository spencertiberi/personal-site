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
  componentDidMount() {
    fetch(`https://medium.com/@aaron.klaser/latest?format=json`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.payload.references.Post,
          loading: false
        })
      })
      .catch(error => {
        console.error(error)
      })
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
