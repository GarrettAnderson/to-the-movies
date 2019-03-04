import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h3>Now Playing!</h3>
        <h1>{this.props.display}</h1>
      </header>
    )
  }
}

export default Header
