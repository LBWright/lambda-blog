import React from 'react';
import {Route} from 'react-router-dom';
import App from './App';
import Login from './components/Layout/Login';
import Post from './components/Posts/Post';

const Root = props => {
  return (
    <div>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/post/:id" component={Post} />
    </div>
  );
};

export default Root;
