import React, { Component } from 'react';
import Styled from 'styled-components';
import axios from 'axios';
import Header from '../Layout/Header';

const Headline = Styled.h3`
    font-family: 'PT Sans', sans-serif;
    font-style: bold;
    text-align: left;
    font-size: 24px;
`;

const Body = Styled.p`
    font-family: 'PT Sans', sans-serif;
    font-style: light;
    font-size: 14px;
    text-align: left;
    height: 500px;
  
`;

const HRule = Styled.hr`
  width: 60%
  border-color: rgb(147,29,37);
`;

const PostDiv = Styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
  padding: 20px;
  background: #f6f6f6;
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
      <Header />
      <PostDiv>
        <Headline>{post.blog_title}</Headline>
        <HRule />
        <Body>{post.blog_body}</Body>
      </PostDiv>
      </div>
    );
  }
}

export default Post;
