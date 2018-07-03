import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/actions_auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
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
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />

          <input
            placeholder="Password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
          <button type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser: loginUser }, dispatch);
}

export default connect(
  matchDispatchToProps,
  mapStateToProps
)(Login);
