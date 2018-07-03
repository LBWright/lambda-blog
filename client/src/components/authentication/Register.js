import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/actions_auth';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      password2: '',
      skills: '',
      job_interests: '',
      about: '',
      cohort_name: ''
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password,
      skills: this.state.skills,
      job_interests: this.state.job_interests,
      about: this.state.about,
      cohort_name: this.state.cohort_name
    };
    if (this.state.password !== this.state.password2) {
      alert('Please enter matching passwords');
      this.setState({ password: '', password2: '' });
    } else {
      this.props.registerUser(newUser, this.props.history);
    }
  };
  render() {
    return (
      <form className="form-wrapper" onSubmit={this.onSubmit}>
        <div className="headline-wrapper register-form-headline" >
          <h1 className="headline-h1">Lambda Times</h1>
          <h4 className="headline-h4">Register</h4>
        </div>
        <div className="input-wrapper register-form">
          <div>
          <input
            className="input-handler"
            placeholder="First Name"
            name="firstName"
            type="name"
            value={this.state.firstName}
            onChange={this.onInputChange}
          />
          <input
            className="input-handler"
            placeholder="Last Name"
            name="lastName"
            type="name"
            value={this.state.lastName}
            onChange={this.onInputChange}
          />
          </div>
          <div>
          <input
            className="input-handler"
            placeholder="Email Address"
            name="username"
            type="email"
            value={this.state.username}
            onChange={this.onInputChange}
          />
          <input
            className="input-handler"
            type="text"
            placeholder="What Cohort?"
            name="cohort_name"
            type="text"
            value={this.state.cohort_name}
            onChange={this.onInputChange}
          />
          </div>
          <div>
          <input
            className="input-handler"
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <input
            className="input-handler"
            placeholder="Confirm Password"
            name="password2"
            type="password"
            value={this.state.password2}
            onChange={this.onInputChange}
          />
          </div>
          <div>
          <textarea
            className="input-handler text-area"
            placeholder="What are some of your skills?"
            name="skills"
            type="text"
            value={this.state.skills}
            onChange={this.onInputChange}
          />
          <textarea
          className="input-handler text-area"
            placeholder="Describe some of your job interests. (ex: React, Frontend Developer, Python Dev)"
            name="job_interests"
            type="text"
            value={this.state.job_interests}
            onChange={this.onInputChange}
          />
          </div>
          <div>
          <textarea
            className="input-handler text-area bio"
            placeholder="Write a little about yourself"
            name="about"
            type="text"
            value={this.state.about}
            onChange={this.onInputChange}
          />
          </div>
          <button className="button-login" type="submit" value="Register">Register</button>
        </div>
        
 
      </form>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
