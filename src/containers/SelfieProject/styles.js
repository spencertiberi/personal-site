import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Image = styled.img`
  width: 30vw;
  height: auto;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.ceiling}) {
    width: 50vw;
  }
`

export const Title = styled(Flex)`
  font-size: 2.25em;
  margin: 0.25em;
  color: ${props => ({ theme }) =>
    props.alt ? theme.colors.headerAlt : theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.heading};
`

export const Text = styled(Flex)`
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainFont};
  margin: 1em;
  text-align: justify;
`
