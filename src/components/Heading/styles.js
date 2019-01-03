import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  height: 6em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Header = styled(Flex)`
  color: ${({ theme }) => theme.colors.header};
  font-size: 4em;
  font-family: ${({ theme }) => theme.fonts.main};
  text-align: center;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    font-size: 3em;
  }
`
