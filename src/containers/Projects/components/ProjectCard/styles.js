import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.headerAlt};

  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 12em;
  height: 12em;
  margin-bottom: 2em;
  padding: 1em;
  text-decoration: none;
  text-align: center;
  :hover,
  &.active {
    color: ${({ theme }) => theme.colors.headerAlt};
    background-color: ${({ theme }) => theme.colors.header};
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.ceiling}) {
    width: 100vw;
    height: 5em;
    margin-bottom: 0;
    background-color: ${({ theme }) => theme.colors.background};
  }
`

export const Title = styled(Flex)`
  font-size: 2em;
  text-align: center;
  z-index: 2;
`

export const Description = styled(Flex)`
  font-size: 1em;
  text-align: center;
  z-index: 2;
`
