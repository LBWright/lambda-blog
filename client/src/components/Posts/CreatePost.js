import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 100%;
  padding 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 60%;
  padding: 5px 10px;
  margin: 10px 0;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
`;

const Text = styled.textarea`
  width: 60%
  height: 200px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  margin: 10px 0;
`;

const Back = styled(Link)`
  width: 160px;
  height: 40px;
  color: #b22222;
  background: white;
  border-radius: 5px;
  border: 1px solid black;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 160px;
  height: 40px;
  color: white;
  background: #b22222;
  border-radius: 5px;
  border: 1px solid black;
  font-size: 20px;
  margin-top: 20px;
`;
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
      blog_title: this.state.title,
      tag: this.state.tag,
      blog_body: this.state.body,
      userId: id
    };
    axios
      .post('https://lambda-blog.herokuapp.com/api/blogs', blog)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message));
    this.props.history.push('/');
  };

  render() {
    // if (!this.props.auth.isAuthenticated) {
    //   this.props.history.push('/');
    // }
    return (
      <Container>
        <h1>Add a new Post</h1>
        <Form onSubmit={this.onSubmit}>
          <Input
            value={this.state.title}
            onChange={this.onInputChange}
            name="title"
            type="text"
            placeholder="Post Title"
          />
          <Input
            value={this.state.tag}
            onChange={this.onInputChange}
            name="tag"
            type="text"
            placeholder="Tags"
          />
          <Text
            value={this.state.body}
            onChange={this.onInputChange}
            name="body"
            type="text"
            placeholder="Happy Posting!"
          />
          <Button type="submit">Add Post</Button>
        </Form>
        <Back to="/">Home</Back>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(CreatePost);
