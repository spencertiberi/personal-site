import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: row;
  margin: 0 0 1em 0;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainAlt};
  width: auto;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.ceiling}) {
    width: 100%;
    justify-content: space-between;
  }
`

export const Title = styled(Flex)`
  font-weight: 800;
  white-space: pre;
  color: ${({ theme }) => theme.colors.mainDark};
`

export const Text = styled(Flex)``
