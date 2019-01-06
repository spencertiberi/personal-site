import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  width: 100vw;
  height: auto;
  z-index: 100;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts.main};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 1em 15vw 1em 15vw;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    padding: 0 15vw 0 15vw;
  }
`

export const Title = styled(Flex)`
  font-size: 3em;
  color: ${({ theme }) => theme.colors.header};
  text-shadow: 2px 2px ${({ theme }) => theme.colors.headerAlt};
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  margin-bottom: 0.25em;
  z-index: 100;
  position: sticky;
  top: 0;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    position: relative;
  }
`

export const Paragraph = styled(Flex)`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.mainFont};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Pic = styled.img`
  width: 25vw;
  height: auto;
  margin: 0 1em 1em 0;
  position: sticky;
  top: 4.25em;
  z-index: 50;
  overflow: hidden;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    width: 50vw;
    margin: 0 0 1em 0;
    position: relative;
    top: 0;
  }
`

export const Text = styled.p`
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainFont};
  margin: 0 0 1em 0;
  text-align: justify;
`