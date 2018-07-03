import React from 'react';
import { Route } from 'react-router-dom';
import App from './App';
import Login from './components/authentication/Login';
import Dashboard from './components/dashboard/Dashboard';
import Register from './components/authentication/Register';
import CreatePost from './components/Posts/CreatePost';
import Post from './components/Posts/Post';

const Root = props => {
  return (
    <div>
      <Route exact path="/" component={App} />
<<<<<<< HEAD
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/posts/new" component={CreatePost} />
      <Route path="/posts/:id" component={Post} />
=======
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/posts/new" component={CreatePost} />
      <Route path="/posts/:id" component={Post} />
      {/*<Route path="/profiles/:id" component={Profiles} />*/}
>>>>>>> 5f3acbf76c9ffca464a556f45a3c8fb4108f5ba5
    </div>
  );
};

export default Root;
