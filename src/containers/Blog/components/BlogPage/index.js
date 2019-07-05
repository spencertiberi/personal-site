import React from 'react'
import Markdown from 'react-markdown'
import { Container, Title } from './styles'

const BlogPage = ({ blogFile, title }) => (
  <Container>
    <Title>{title}</Title>
    <Markdown source={blogFile} />
  </Container>
)

export default BlogPage
