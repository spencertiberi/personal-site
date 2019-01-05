import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import config from './config'
import Home from './containers/Home/'
import About from './containers/About'
import Resume from './containers/Resume/'
import Navbar from './components/Navbar/'
import Footer from './components/Footer'

// creates new client
const client = new ApolloClient({
  uri: config.graphqlUrl
})

const View = ({ component: MainComponent, purple, path, ...rest }) => (
  <Route
    {...rest}
    component={props => (
      <div>
        <Navbar />
        <MainComponent {...props} />
        <Footer />
      </div>
    )}
  />
)

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <div className="App">
              <Switch>
                <View path="/about" component={About} />
                <View path="/resume" component={Resume} />
                <View path="/portfolio" component={Resume} />
                <View path="/" component={Home} />
              </Switch>
            </div>
          </ApolloProvider>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App
