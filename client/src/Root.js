import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Login from './components/authentication/Login';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/authentication/Register';
import CreatePost from './components/Posts/CreatePost';

const Root = props => {
  return (
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/posts/new" component={CreatePost} />
      {/*<Route path="/profiles/:id" component={Profiles} />*/}
    </div>
  );
};

export default Root;
