import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const InstagramContainer = styled(Flex)`
  flex-direction: row;
  width: 100vw;
  max-width: 1099px;
  height: auto;
  padding: 2vw 3vw 0 3vw;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    width: 100%;
    height: auto;
    grid-template-columns: repeat(3, 130px);
    padding: 0px;
    margin-top: 20px;
  }
`
export const ViewAll = styled(Flex)`
  height: 2em;
  width: 100%;
  padding-right: 2%;
  margin-top: 20px;
  align-items: flex-end;
  text-align: center;
  align-content: center;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: nowrap;
  align-items: center;
  z-index: 0;
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  margin-top: 2%;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    font-size: 14px;
  }
`

export const OuterContainer = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    background-color: transparent;
    width: 390px;
    height: auto;
    padding: 0px;
  }
`

export const Title = styled(Flex)`
  font-size: 1.5em;
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.header};
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    font-size: 2.5em;
    margin-bottom: 0px;
  }
`

export const Wrapper = styled(Flex)`
  width: 100vw;
  flex-direction: column;
  align-self: center;
  align-items: center;
`
export const ArrowImg = styled.img`
  width: 31px;
  height: 14px;
  padding-left: 2%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.ceiling}) {
    height: 14px;
    width: auto;
    align-self: right;
  }
`
