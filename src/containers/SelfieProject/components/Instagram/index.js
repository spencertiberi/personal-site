import React, { Component } from 'react'
import {
  InstagramContainer,
  Title,
  Wrapper,
  OuterContainer,
  ViewAll,
  ArrowImg,
  Text
} from './styles'
import Tile from './components/Tile'
import config from '../../config'
import Arrow from './Arrow.png'

class Instagram extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch(`${config.urls.backend}/instagram/posts`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data.data
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
        <Title>Gallery</Title>
        <OuterContainer>
          <InstagramContainer>
            {posts.map(item => {
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
            })}
          </InstagramContainer>
          <ViewAll>
            <Text
              onClick={() => {
                this.onLinkClick(
                  'https://www.instagram.com/former_strangers/?hl=en'
                )
              }}
            >
              VIEW ALL ON INSTAGRAM
            </Text>

            <ArrowImg src={Arrow} />
          </ViewAll>
        </OuterContainer>
      </Wrapper>
    )
  }
}

export default Instagram
