import './App.css'

import React, { Component } from 'react'

import Shuriken from './components/Shuriken'
import logo from './logo.svg'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Ninjawars Component Development and Testing
          </h1>
        </header>
        <div>
          <Shuriken>Demo for Shuriken</Shuriken>
        </div>
      </div>
    )
  }
}

export default App
