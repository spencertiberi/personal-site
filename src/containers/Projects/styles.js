import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const Cards = styled(Flex)`
  width: 70vw;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 850px;
  margin-top: 1em;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.ceiling}) {
    width: 100vw;
    background-color: ${({ theme }) => theme.colors.header};
    margin-top: 0;
  }
`
