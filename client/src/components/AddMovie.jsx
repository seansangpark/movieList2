import React from 'react';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ movieTitle: e.target.value })
  }

  handleSubmit(e) {
    event.preventDefault();
    console.log(`${this.state.movieTitle} was added!`)
    this.props.addMovie(this.state.movieTitle);
    this.setState({
      movieTitle: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} value={this.state.movieTitle} >
        <input onChange={this.handleChange} placeholder="Add movie title here..." />
        <button>Add</button>
      </form>
    );
  }
}

export default AddMovie;