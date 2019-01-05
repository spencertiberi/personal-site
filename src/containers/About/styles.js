import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

export const Text = styled(Flex)`
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainFont};
  text-align: justify;
  padding: 1em 15vw 1em 15vw;
`
