import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/authentication/Login';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/authentication/Register';
import CreatePost from './components/Posts/CreatePost';
import Post from './components/Posts/Post';

const Root = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/posts/new" component={CreatePost} />
        <Route path="/posts/:id" component={Post} />
      </Switch>
    </div>
  );
};

export default Root;
