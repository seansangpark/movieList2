import React from 'react';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movieTitle: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ movieTitle: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchMovie(this.state.movieTitle);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} value={this.state.movieTitle}>
        <input onChange={this.handleChange.bind(this)} placeholder='Search...' />
        <button>Go!</button>
      </form>
    )
  }
}

export default SearchMovie;