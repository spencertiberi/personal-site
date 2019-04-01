import React from 'react'
import { Post, Caption, Image } from './styles'

const Tile = ({ image, caption, link }) => (
  <Post onClick={() => window.open(link)}>
    <Image src={image} alt="photo2" />
    <Caption>
      {caption.length > 100 ? `${caption.substring(0, 70)}...` : caption}
    </Caption>
  </Post>
)

export default Tile
