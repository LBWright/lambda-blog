import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions_auth';
import "../../index.css";

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
      <div className="form-wrapper">
        <div className="headline-wrapper">
        <h1 className="headline-h1">Lambda Times</h1>
        <h4 className="headline-h4">Please log in</h4>
        </div>
        <form onSubmit={this.onSubmit} className="input-wrapper">
          <div>
            <input
              placeholder="Email Address"
              name="username"
              type="email"
              value={this.state.username}
              onChange={this.onInputChange}
              className="input-handler"
            />

            <input
              placeholder="Password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onInputChange}
              className="input-handler"
            />
          </div>
          <button className="button-login" type="submit" value="Login">
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
