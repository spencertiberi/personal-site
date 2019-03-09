import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const InstagramContainer = styled(Flex)`
  background-color: #24212a;
  flex-direction: row;
  width: 908px;
  height: 1099px;
  align-self: flex-start;
  padding: 35px;
  display: grid;
  margin-bottom: 2%;
  grid-template-columns: repeat(3, 290px);
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    background-color: transparent;
    width: 100%;
    height: 376px;
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
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-size: 24px;
  margin-top: 2%;
  cursor: pointer;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    font-size: 14px;
  }
`

export const OuterContainer = styled(Flex)`
  flex-direction: column;
  width: 908px;
  height: 1100px;
  align-self: flex-end;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    background-color: transparent;
    width: 390px;
    height: 390px;
    padding: 0px;
  }
`

export const Title = styled(Flex)`
  font-size: 36px;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #f2f2f2;
  font-family: ${({ theme }) => theme.fonts.body.family};
  font-weight: bold;
  margin-top: 80px;
  align-self: center;
  text-shadow: 1px 1px ${({ theme }) => theme.colors.primary};
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    transform: rotate(-90deg);
    font-size: 48px;
    margin-bottom: 0px;
  }
`

export const Wrapper = styled(Flex)`
  width: 100%;
  flex-direction: column;
  align-self: center;
  margin-top: 20%;
  margin-left: 10px;
  margin-right: 10px;
  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    margin-left: 30px;
    margin-bottom: 60px;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-end;
  }
`
export const ArrowImg = styled.img`
  width: 31px;
  height: 14px;
  padding-left: 2%;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.ceiling}) {
    height: 14px;
    width: auto;
    align-self: right;
  }
`
