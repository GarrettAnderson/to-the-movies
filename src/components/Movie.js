import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Movie extends Component {
  state = {
    movies: [],
    movieId: '',
    title: '',
    releaseDate: '',
    movieCast: [],
    image: ''
  }

  render() {
    return (
      <li>
        <figure>
          <Link to={`/${this.state.movies[this.props.match.params.movieId].id}`}>
            <img src={`https://image.tmdb.org/t/p/original${this.props.image}`} />
          </Link>
          <figcaption>
            <h2>
              <Link to={`/${this.state.movies[this.props.key].id}`}>{this.props.title}</Link>
            </h2>
            {/* <p>{movie.release_date}</p>
            <p>{movie.overview}</p> */}
          </figcaption>
        </figure>
      </li>
    )
  }
}

export default Movie
