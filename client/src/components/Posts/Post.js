import React, { Component } from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
//import Rating from './Rating';

const Headline = Styled.h3`
    font-family: 'PT Sans', sans-serif;
    font-style: light;
    text-align: left;
`;

const Body = Styled.p`
    font-family: 'PT Sans', sans-serif;
    font-style: light;
    font-size: 14px;
    text-align: left;
`;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  componentDidMount() {
    console.log('inside of CDM', this.props);
    const { id } = this.props.match.params;
    axios
      .get(`https://lambda-blog.herokuapp.com/api/blogs/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ post: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    console.log(this.props);
    if (this.state.post == null) {
      <p>Loading...</p>;
    }
    const { post } = this.state;
    return (
      <div>
        <Headline>{post.post_title}</Headline>
        <Body>{post.post_body}</Body>
      </div>
    );
  }
}

export default Post;
