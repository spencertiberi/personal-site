import React from 'react'
import {
  Post,
  Caption,
  CountersContainer,
  Counters,
  Image,
  Icon
} from './styles'
import Heart from './assets/heart.png'
import Comment from './assets/comment.png'

const Tile = ({ image, caption, likes, comments, link }) => (
  <Post onClick={() => window.open(link)}>
    <Image src={image} alt="photo2" />
    <Caption>{`${caption.substring(0, 45)}...`}</Caption>
    <CountersContainer>
      <Counters>
        <Icon src={Heart} />
        <div>{likes}</div>
      </Counters>
      <Counters>
        <Icon src={Comment} />
        <div>{comments}</div>
      </Counters>
    </CountersContainer>
  </Post>
)

export default Tile
