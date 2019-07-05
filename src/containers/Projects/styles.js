import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const NavItem = styled(Link)`
  font-size: 2em;
  margin: 0 0.6em 0 0.6em;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.header};
  z-index: 2;
  :hover,
  &.active {
    color: ${({ theme }) => theme.colors.header};
    text-shadow: 1.5px 1.5px ${({ theme }) => theme.colors.headerAlt};
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.mainAlt};
  }
`
