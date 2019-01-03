import React, { Component } from 'react'
import { Container, Desktop, Icon, Logo, Menu, Mobile, NavItem } from './styles'
import logo from './st.png'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuVisable: false
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Logo src={logo} alt="Spencer Tiberi Logo" />
          <Desktop>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/resume">Resume</NavItem>
            <NavItem to="/portfolio">Portfolio</NavItem>
          </Desktop>
        </Container>
        <Mobile>
          <Logo src={logo} alt="Spencer Tiberi Logo" />
          {this.state.menuVisable ? (
            <React.Fragment>
              <Menu>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about">About</NavItem>
                <NavItem to="/resume">Resume</NavItem>
                <NavItem to="/portfolio">Portfolio</NavItem>
              </Menu>
              <Icon onClick={() => this.setState({ menuVisable: false })}>
                &#10005;
              </Icon>
            </React.Fragment>
          ) : (
            <Icon onClick={() => this.setState({ menuVisable: true })}>
              &#9776;
            </Icon>
          )}
        </Mobile>
      </React.Fragment>
    )
  }
}

export default Navbar
