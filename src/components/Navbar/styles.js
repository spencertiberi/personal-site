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

export const Image = styled.img`
  z-index: 50;
  width: auto;
  height: 10em;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.headerStyle.ceiling}) {
    display: none;
  }
`

export const NavItems = styled(Flex)`
  flex-direction: row;
  z-index: 50;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.headerStyle.ceiling}) {
    justify-content: center;
  }
`

export const LogoContainer = styled(Flex)`
  height: auto;
  width: auto;
  flex-direction: row;
  align-items: center;
`

export const Desktop = styled(Flex)`
  width: 100vw;
  height: 11em;
  padding: 0 5em;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.headerStyle.ceiling}) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Icon = styled(Flex)`
  font-size: 2.5em;
  color: ${({ theme }) => theme.colors.header};
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  z-index: 2;
`

export const Logo = styled.img`
  width: 14em;
  height: auto;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  z-index: 50;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    margin-bottom: 0.7em;
  }
`

export const Mobile = styled(Flex)`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};

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
  z-index: 100;

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

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    color: ${({ theme }) => theme.colors.headerAlt};
    :hover,
    &.active {
      color: ${({ theme }) => theme.colors.mainFont};
      text-shadow: none;
      text-decoration: none;
      text-decoration-color: ${({ theme }) => theme.colors.mainAlt};
    }
  }
`
