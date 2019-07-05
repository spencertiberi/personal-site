import React, { Component } from 'react'
import {
  Container,
  Desktop,
  Icon,
  Logo,
  Menu,
  Mobile,
  NavItem,
  Image,
  NavItems,
  LogoContainer
} from './styles'
import { withRouter } from 'react-router-dom'
import logo from './Signature.png'
import ellie from './elliedrawing.jpg'

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
          <Desktop>
            <LogoContainer>
              <Image src={ellie} alt="Spencer" />
              <Logo src={logo} alt="Spencer Tiberi Logo" />
            </LogoContainer>
            <NavItems>
              <NavItem
                to="/"
                className={this.props.location.pathname === '/' ? 'active' : ''}
              >
                Home
              </NavItem>
              <NavItem
                to="/resume"
                className={
                  this.props.location.pathname === '/resume' ? 'active' : ''
                }
              >
                Resume
              </NavItem>
              <NavItem
                to="/blog"
                className={
                  this.props.location.pathname === '/blog' ? 'active' : ''
                }
              >
                Blog
              </NavItem>
              <NavItem
                to="/projects"
                className={
                  this.props.location.pathname.includes('/projects')
                    ? 'active'
                    : ''
                }
              >
                Projects
              </NavItem>
            </NavItems>
          </Desktop>
        </Container>
        <Mobile>
          <Logo src={logo} alt="Spencer Tiberi Logo" />
          {this.state.menuVisable ? (
            <React.Fragment>
              <Menu>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/resume">Resume</NavItem>
                <NavItem to="/formerstrangers">Former Strangers</NavItem>
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

export default withRouter(Navbar)
