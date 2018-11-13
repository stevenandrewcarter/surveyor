import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Graph from './Graph'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {content: {}}
    window.ipcRenderer.on('file-opened', (event, content) => {
      console.log(content)
      this.setState({content: content})
    })
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload. Check it out, it will reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{JSON.stringify(this.state.content)}</p>
          <p><Graph data={[5, 10, 1, 3]} size={[500, 500]} /></p>
        </header>
      </div>
    )
  }
}

export default App
