import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Bio = styled(Flex)`
  padding: 1em 15vw 1em 15vw;
  height: auto;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    flex-direction: column;
    padding: 0 15vw 0 15vw;
    align-items: center;
  }
`

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

export const Pic = styled.img`
  width: 25vw;
  height: auto;
  margin: 0 1em 1em 0;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    width: 50vw;
    margin: 0 0 1em 0;
  }
`

export const Text = styled.p`
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainFont};
  margin: 0;
  text-align: justify;
`
