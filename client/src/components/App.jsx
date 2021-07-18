import React from 'react';
import axios from 'axios';
import Title from './Title.jsx';
import MovieList from './MovieList.jsx';
import SearchMovie from './SearchMovie.jsx';
import AddMovie from './AddMovie.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      searched: [],
      watchedList: [],
      toWatchList: [],
      isSearched: false,
      watch: false,
      towatch: false
    };

    this.getData = this.getData.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.searchMovie = this.searchMovie.bind(this);
    this.isWatched = this.isWatched.bind(this);
    this.displayWatched = this.displayWatched.bind(this);
    this.displayToWatch = this.displayToWatch.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/movieList')
      .then((titles) => {
        const titleArr = titles.data.map(t => {
          return { title: t.title, watched: false };
        });
        console.log(titleArr);
        this.setState({
          movies: titleArr
        })
      })
      .catch((err) => {
        console.log('Failed receiving data in React');
      })
  }

  addMovie(movieInput) {
    console.log(movieInput);
    axios.post('/movieList', { movieInput })
      .then((res) => {
        res.status(200);
      })
      .catch((err) => {
        console.log(`Post request failed: ${err}`)
      })
    this.getData();
  }

  searchMovie(movieInput) {
    console.log(`${movieInput} was searched!`);
    this.setState({
      isSearched: true
    })
    const filtered = this.state.movies.filter(movie => {
      if (movie.title.includes(movieInput)) {
        return movie;
      }
    })
    this.setState({
      searched: filtered
    })
  }

  isWatched(movie) {
    this.state.movies.forEach(movies => {
      if (movies.title === movie) {
        movies.watched = true;
      }
    })
  }

  displayWatched() {
    const watched = this.state.movies.filter(movie => {
      if (movie.watched) {
        return movie;
      }
    })
    this.setState({
      watchedList: watched,
      watch: true,
      towatch: false
    })
  }

  displayToWatch() {
    const toWatch = this.state.movies.filter(movie => {
      if (!movie.watched) {
        return movie;
      }
    })
    this.setState({
      toWatchList: toWatch,
      watch: false,
      towatch: true
    })
  }

  render() {
    var displaySearch;
    if (this.state.isSearched) {
      displaySearch = this.state.searched;
    } else {
      if (this.state.watch) {
        displaySearch = this.state.watchedList
      } else if (this.state.towatch) {
        displaySearch = this.state.toWatchList
      } else {
        displaySearch = this.state.movies;
      }
    }

    return (
      <div>
        <Title />
        <br />
        <AddMovie addMovie={this.addMovie} />
        <br />
        <SearchMovie searchMovie={this.searchMovie} />
        <br />
        <div>
          <button onClick={this.displayWatched.bind(this)}>Watched</button>
          <button onClick={this.displayToWatch.bind(this)}>To Watch</button>
        </div>
        <br />
        <MovieList movieTitles={displaySearch} isWatched={this.isWatched} />
      </div>
    )
  }
}

export default App;