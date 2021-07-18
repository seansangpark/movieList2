import React from 'react';

class MovieItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    event.preventDefault();
    this.props.isWatched(this.props.movieTitle);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.movieTitle}
        <button className="btn btn-success">Watched</button>
      </form >
    )
  }
}

export default MovieItem;