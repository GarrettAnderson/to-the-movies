import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <h3>Now Playing:</h3>
        <section className="now-playing-header">
          <h1>{this.props.display}</h1>
        </section>
      </header>
    )
  }
}

export default Header
