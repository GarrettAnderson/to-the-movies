import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

class MovieList extends Component {
  // let apiKey = '76fa766989bc43019f44915308d9d724'
  state = {
    movies: [],
    movieId: '',
    title: '',
    releaseDate: '',
    cast: '',
    image: '',
    randomMovie: ''
  }

  componentDidMount() {
    let apiURL =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=76fa766989bc43019f44915308d9d724&language=en-US&page=1'
    axios.get(apiURL).then((resp) => {
      console.log(resp)
      console.log(resp.data.results)
      this.setState({
        movies: resp.data.results
      })
    })
    this.getRandomMovie()
  }

  getRandomMovie = () => {
    let apiURL =
      'https://api.themoviedb.org/3/movie/now_playing?api_key=76fa766989bc43019f44915308d9d724&language=en-US&page=1'
    axios.get(apiURL).then((resp) => {
      console.log(resp)
      console.log(resp.data.results)
      let movieList = resp.data.results
      let listLength = resp.data.results.length
      console.log(listLength)
      let randomMovieId = Math.floor(Math.random() * listLength)
      console.log(movieList[randomMovieId])
      this.setState({
        randomMovie: movieList[randomMovieId].title
      })
    })
  }

  render() {
    return (
      <div>
        <Header display={this.state.randomMovie} />
        <section>
          <main>
            <ol>
              {this.state.movies.map((movie, index) => {
                console.log(movie.poster_path)
                return (
                  <li key={index}>
                    <figure>
                      <Link to={`/${this.state.movies[index].id}`}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                      </Link>
                      <figcaption>
                        <h2>
                          <Link to={`/${this.state.movies[index].id}`}>{movie.title}</Link>
                        </h2>
                        <p>{movie.release_date}</p>
                        <p>{movie.overview}</p>
                      </figcaption>
                    </figure>
                  </li>
                )
              })}
            </ol>
          </main>
        </section>
      </div>
    )
  }
}

export default MovieList
