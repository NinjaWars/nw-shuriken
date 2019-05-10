import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Shuriken from './components/Shuriken/Shuriken'

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
