import React, { Component } from 'react'
import { InstagramContainer, Wrapper, OuterContainer, Title } from './styles'
import Tile from './components/Tile'
import config from './config'

class Instagram extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
    fetch(`${config.urls.backend}/instagram/posts`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.data,
          loading: false
        })
      })
      .catch(error => {
        console.error(error)
      })
  }
  onLinkClick = url => {
    window.open(url)
  }

  render() {
    const { posts } = this.state
    const { instagramRef } = this.props
    return (
      <Wrapper ref={instagramRef}>
        <OuterContainer>
          <Title as="a" href="https://www.instagram.com/former_strangers/">
            @former_strangers
          </Title>
          <InstagramContainer>
            {!this.state.loading ? (
              posts.map(item => {
                const { comments, caption, images, link, likes } = item
                return (
                  <Tile
                    image={images.standard_resolution.url}
                    caption={caption.text}
                    comments={comments.count}
                    link={link}
                    likes={likes.count}
                  />
                )
              })
            ) : (
              <Title>Loading Instagram Feed...</Title>
            )}
          </InstagramContainer>
        </OuterContainer>
      </Wrapper>
    )
  }
}

export default Instagram
