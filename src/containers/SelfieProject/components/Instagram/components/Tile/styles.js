import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Post = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;
  &:hover {
    cursor: pointer;
  }
`
export const Caption = styled(Flex)`
  flex-direction: row;
  padding: 10px;
  padding-right: 40px;
  font-family: ${({ theme }) => theme.fonts.body.family};
  color: ${({ theme }) => theme.colors.seventh};
  letter-spacing: 0.07em;
  font-size: 14px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    display: none;
  }
`
export const CountersContainer = styled(Flex)`
  margin-top: 10px;
  margin-bottom: 25px;
  margin-right: 50px;
  align-self: center;
  width: 80px;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.fonts.body.family};
  color: ${({ theme }) => theme.colors.seventh};
  letter-spacing: 0.07em;
  font-size: 14px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    display: none;
  }
`
export const Counters = styled(Flex)`
  margin-right: 15px;
`
export const Image = styled.img`
  width: 236px;
  height: 235px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.floor}) {
    width: 117px;
    height: 118px;
    margin-bottom: 12px;
  }
`
export const Icon = styled.img`
  width: 17.47px;
  height: 17.47px;
  margin-right: 5px;
`
