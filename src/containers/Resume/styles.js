import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

export const Entries = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
`

export const Title = styled(Flex)`
  font-size: 2.25em;
  margin-bottom: 0.25em;
  color: ${({ theme }) => theme.colors.mainFont};
  font-family: ${({ theme }) => theme.fonts.heading};
`
