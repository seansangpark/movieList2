import React from 'react';
import MovieItem from './MovieItem.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var noMovie = 'No Movie by that name found';
    var isWatched = this.props.isWatched;
    if (this.props.movieTitles.length !== 0) {
      return (
        <div className="wrapper">
          {this.props.movieTitles.map((movie, index) => {
            return <MovieItem movieTitle={movie.title} isWatched={isWatched} key={index} />
          })}
        </div>
      )
    } else {
      return (
        <div className="wrapper">
          <MovieItem movieTitle={noMovie} />
        </div>
      )
    }
  }
}

export default MovieList;