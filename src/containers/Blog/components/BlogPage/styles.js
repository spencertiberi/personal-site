import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Title = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.75em;
`

export const Container = styled(Flex)`
  flex-direction: column;
`
