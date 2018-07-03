import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      tag: '',
      body: ''
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { id } = this.props.auth;
    let blog = {
      post_title: this.state.title,
      tag: this.state.tag,
      post_body: this.state.body,
      userId: id
    };
    axios
      .post('https://lambda-blog.herokuapp.com/api/blogs', blog)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    this.props.history.push('/');
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.title}
          onChange={this.onInputChange}
          name="title"
          type="text"
        />
        <input
          value={this.state.tag}
          onChange={this.onInputChange}
          name="tag"
          type="text"
        />
        <textarea
          value={this.state.body}
          onChange={this.onInputChange}
          name="body"
          type="text"
        />
        <button type="submit">Add Post</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(CreatePost);
