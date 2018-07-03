import React, { Component } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import axios from 'axios';
import Posts from './components/Posts/Posts';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
