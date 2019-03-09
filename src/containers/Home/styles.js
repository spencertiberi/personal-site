import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const ImageWrapper = styled(Flex)`
  position: relative;
  min-height: 60vw;
  width: 100vw;
  overflow: hidden;
`

export const MainImage = styled.img`
  position: absolute;
  z-index: -100;
  width: 100vw;
  height: auto;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    position: relative;
  }
`
