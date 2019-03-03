import React, { Component } from 'react'
import axios from 'axios'

class MovieDetail extends Component {
  state = {
    movies: [],
    movieId: '',
    title: '',
    releaseDate: '',
    movieCast: [],
    description: '',
    image: ''
  }

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params.movie}?api_key=76fa766989bc43019f44915308d9d724`
      )
      .then((resp) => {
        console.log(resp)

        this.setState({
          title: resp.data.title,
          image: resp.data.poster_path,
          description: resp.data.overview,
          releaseDate: resp.data.release_date
        })
      })
    this.getCast()
  }

  getCast = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.props.match.params
          .movie}/credits?api_key=76fa766989bc43019f44915308d9d724`
      )
      .then((resp) => {
        console.log(resp)

        this.setState({
          movieCast: resp.data.cast
        })
      })
  }

  render() {
    // const currentMovie = this.state.movies[this.props.match.params.Movie];
    // console.log(currentMovie);
    return (
      <section>
        <figure>
          <img src={`https://image.tmdb.org/t/p/original${this.state.image}`} />
          <figcaption>
            <h2>{this.state.title}</h2>
            <p>{this.state.releaseDate}</p>
            <p>{this.state.description}</p>
            <ol>
              {this.state.movieCast.map((cast, index) => {
                return <li key={index}>{cast.name}</li>
              })}
            </ol>
          </figcaption>
        </figure>
      </section>
    )
  }
}

export default MovieDetail
