import React, { Component } from 'react'
import axios from 'axios'

class MovieList extends Component {
  render() {
    // let apiKey = '76fa766989bc43019f44915308d9d724'
    let apiURL =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=76fa766989bc43019f44915308d9d724&language=en-US&page=1'
    axios.post(apiURL).then((resp) => {
      console.log(resp)
    })

    return (
      <section>
        <figure>
          <img src="" />
          <figcaption>
            <h2>Movie Title</h2>
            <p>Description</p>
            <p>Release Date</p>
            <ol>
              <li>Titanic</li>
              <li>ET</li>
              <li>Batman</li>
              <li>Showgirls</li>
            </ol>
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default MovieList
