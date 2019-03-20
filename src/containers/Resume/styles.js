import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

export const Entries = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: auto;
  background-color: ${props => ({ theme }) =>
    props.alt ? theme.colors.header : theme.colors.background};
`

export const Title = styled(Flex)`
  font-size: 2.25em;
  margin: 0.25em;
  color: ${props => ({ theme }) =>
    props.alt ? theme.colors.headerAlt : theme.colors.header};
  font-family: ${({ theme }) => theme.fonts.heading};
`
