import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions_auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="Email Address"
            name="username"
            type="email"
            value={this.state.username}
            onChange={this.onInputChange}
          />

          <input
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <button type="submit" value="Login">
            Login
          </button>
        </form>
      </div>
    );
  }
}

Login.propTyes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
