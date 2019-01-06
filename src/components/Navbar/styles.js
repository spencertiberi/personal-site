import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 0;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    display: none;
  }
`

export const Desktop = styled(Flex)`
  height: 2.5em;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Icon = styled(Flex)`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.mainFont};
  position: absolute;
  top: 0.25em;
  right: 0.25em;
`

export const Logo = styled.img`
  width: 18em;
  height: auto;
  margin-top: 1em;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`

export const Mobile = styled(Flex)`
  display: none;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    display: flex;
  }
`

export const Menu = styled(Flex)`
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: auto;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.5);

  @keyframes fadeIn {
    from {
      left: 100%;
      top: 0px;
    }
    to {
      left: 0px;
      top: 0px;
    }
  }

  animation-name: fadeIn;
  animation-duration: 0.5s;
`

export const NavItem = styled(Link)`
  font-size: 1.5em;
  margin: 0 0.5em 0 0.5em;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainFont};
  :hover,
  &.active {
    color: ${({ theme }) => theme.colors.header};
    text-shadow: 1.5px 1.5px ${({ theme }) => theme.colors.headerAlt};
  }
`
