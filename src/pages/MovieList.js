import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MovieList extends Component {
  // let apiKey = '76fa766989bc43019f44915308d9d724'
  state = {
    movies: [],
    movieId: "",
    title: "",
    releaseDate: "",
    cast: ""
  };

  componentDidMount() {
    let apiURL =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=76fa766989bc43019f44915308d9d724&language=en-US&page=1";
    axios.get(apiURL).then(resp => {
      console.log(resp);
      console.log(resp.data.results);
      // return resp.data.results
      this.setState({
        movies: resp.data.results
      });
      // console.log(movies)
      // console.log(resp)
      // console.log(movies)
    });

    let imageURL =
      "https://api.themoviedb.org/3/movie/399579/images?api_key=76fa766989bc43019f44915308d9d724&language=en-US";
  }

  render() {
    return (
      <section>
        {/* <header>
          <h1>I Love the 80s!</h1>
          <h3>Films</h3>
        </header> */}
        <main>
          <ol>
            {this.state.movies.map((movie, index) => {
              console.log(movie.poster_path);
              return (
                <li key={index}>
                  <figure>
                    <img
                      src={`https://image.tmdb.org/t/p/original${
                        movie.poster_path
                      }`}
                    />
                    <figcaption>
                      <h2>
                        <Link to={`/${this.state.movies[index].id}`}>
                          {movie.title}
                        </Link>
                      </h2>
                      <p>{movie.release_date}</p>
                      <p>{movie.overview}</p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ol>
        </main>
      </section>
    );
  }
}

export default MovieList;
