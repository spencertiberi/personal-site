import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  width: 100vw;
  height: auto;
  z-index: 100;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.main};
  position: sticky;
  top: 7em;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    position: relative;
    top: 0;
  }
`

export const Title = styled(Flex)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.header};
  text-shadow: 2px 2px ${({ theme }) => theme.colors.headerAlt};
  margin-bottom: 0.25em;
`

export const Paragraph = styled(Flex)`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.mainFont};
`

export const Overview = styled(Flex)`
  width: 100vw;
  height: 40vh;
  z-index: 50;
  background-color: ${({ theme }) => theme.colors.header};
`

export const Top = styled(Flex)`
  width: 100vw;
  height: auto;
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  z-index: 100;
  flex-direction: column;
  padding: 1em 15vw 1em 15vw;
  font-family: ${({ theme }) => theme.fonts.main};
`
