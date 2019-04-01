import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Post = styled(Flex)`
  flex-direction: column;
  flex-wrap: wrap;

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    align-items: center;
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.mainFont};
    border-radius: 5px;
    margin-bottom: 1em;
    width: 240px;
    height: 300px;
    background-color: ${({ theme }) => theme.colors.mainFont};
  }
  &:hover {
    cursor: pointer;
  }
`
export const Caption = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.mainFont};
  flex-direction: row;
  padding: 10px;
  padding-right: 40px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.header};
  font-size: 14px;
  width: auto;
  height: 50px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    display: none;
  }
`
export const Counters = styled(Flex)`
  margin-right: 15px;
`
export const Image = styled.img`
  border-radius: 5px;
  width: 236px;
  height: 235px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.floor}) {
    border-radius: 0px;
    width: 117px;
    height: 118px;
    margin-bottom: 12px;
  }
`
