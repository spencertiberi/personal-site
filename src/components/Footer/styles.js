import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  width: 100vw;
  height: 3em;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.headerAlt}
  background-color: ${({ theme }) => theme.colors.background};
`
