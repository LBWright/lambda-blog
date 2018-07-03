import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER } from './types';

export const registerUser = (userData, history) => dispatch => {
  console.log('sending:', userData);
  axios
    .post('http://localhost:5000/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => alert(err));
};

export const loginUser = userData => dispatch => {
  axios
    .post('http://localhost:5000/api/users/login', userData)
    .then(res => {
      // Save to localStorage
      console.log('logging from within loginUser', res.data);
      const { token } = res.data;
      const { id } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(id, decoded));
    })
    .catch(err => alert(err));
};

// Set logged in user
export const setCurrentUser = (id, decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: {
      decoded,
      id
    }
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
