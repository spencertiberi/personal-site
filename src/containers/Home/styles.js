import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const MainImage = styled.img`
  position: sticky;
  top: 0;
  z-index: -100;
  width: 100vw;
  height: auto;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    position: relative;
  }
`
