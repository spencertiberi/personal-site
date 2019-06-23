import styled from 'styled-components'
import { Flex } from 'grid-styled'

export const Company = styled(Flex)`
  height: auto;
  align-self: flex-start;
  font-size: 1.25em;
  padding: 0.25em 0em 0.25em 0em;
  color: ${props => ({ theme }) =>
    props.alt ? theme.colors.headerAlt : theme.colors.backgroundAlt};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    font-size: 1em;
    padding: 0;
  }
`

export const Degree = Company

export const Container = styled(Flex)`
  width: 100vw;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0 0.5em 0;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.mainFont};
  background-color: ${props => ({ theme }) =>
    props.alt ? theme.colors.header : theme.colors.background};
`

export const Info = styled(Flex)`
  width: 40em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: ${props => (props.offset ? props.offset : 0)};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.middle.ceiling}) {
    width: 30em;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.headerStyle.ceiling}) {
    margin-left: 0;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    width: 80vw;
  }
`

export const Dates = styled(Flex)`
  font-size: 0.85em;
  align-self: flex-end;
  color: ${props => ({ theme }) =>
    props.alt ? theme.colors.headerAlt : theme.colors.backgroundAlt};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    font-size: 0.67em;
    margin-top: 0.33em;
    align-self: flex-start;
  }
`

export const Description = styled(Flex)`
  width: 100%;
  height: auto;
  font-size: 1em;
  padding: 0.5em 0 0.5em 0;
  text-align: justify;
  color: ${props => ({ theme }) =>
    props.alt ? theme.colors.background : theme.colors.mainDark};

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    font-size: 0.85em;
  }
`

export const Row = styled(Flex)`
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 0.25em 0em 0.25em 0em;
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    flex-direction: column;
  }
`

export const Title = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5em;
  align-self: flex-end;
  color: ${props => ({ theme }) =>
    props.alt ? theme.colors.mainFont : theme.colors.header};
  max-width: 50vw;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.ceiling}) {
    font-size: 1.33em;
    align-self: flex-start;
    max-width: 80vw;
  }
`

export const University = Title
