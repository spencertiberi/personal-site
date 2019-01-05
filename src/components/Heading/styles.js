import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  height: 6em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: ${props => (props.scroll ? 'sticky' : 'relative')};
  top: ${props => (props.scroll ? '1em' : '0')};
  z-index: 100;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    position: relative;
    top: 0;
  }
`

export const Header = styled(Flex)`
  color: ${({ theme }) => theme.colors.header};
  font-size: 4em;
  font-family: ${({ theme }) => theme.fonts.main};
  text-align: center;
  text-shadow: 3px 3px ${({ theme }) => theme.colors.headerAlt};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    font-size: 3em;
  }
`
