import styled from 'styled-components'
import { Flex } from 'grid-styled'

const Container = styled(Flex)`
  height: 3em;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.header};
  background-color: ${({ theme }) => theme.colors.background};
`

export default Container
