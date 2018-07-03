import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  width: 80%;
  padding: 30px;
  background: #ccc;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid black;
  align-self: center;
`;

const Label = styled.h4`
  font-size: 24px;
  font-weight: bold;
`;

const PostButton = styled(Link)`
  width: 160px;
  height: 45px;
  background: #B22222;
  color: white;
  text-align: center;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  text-decoration: none;
  font-weight: bold
  align-self: flex-end;
  margin: 10px;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0 20px 0;
`;

const HomeButton = styled(Link)`
  width: 160px;
  height: 45px;
  padding: 5px;
  color: white;
  background: #B22222;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  text-decoration: none;
  font-weight: bold
  margin: 10px;
`;

const Welcome = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: right;
  padding-bottom: 50px;
  width: 100%;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #eee;
  padding: 60px 20px;
  border-radius: 5px;
  border: 2px solid black;
`;
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {}
    };
  }

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
      alert('You must be logged in to view the dashboard.');
      return;
    }
    const { id } = this.props.auth;

    axios
      .get(`https://lambda-blog.herokuapp.com/api/users/${id}`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .then(profileData => this.setState({ profileData }));
  }

  render() {
    if (!this.state.profileData) {
      return <p>Loading...</p>;
    }
    console.log('logging from dashboard', this.props);

    const { user } = this.props.auth;
    const { profileData } = this.state;
    return (
      <Container>
        <Welcome>Welcome, {user.name}</Welcome>
        <h2>Here's your deets</h2>
        <Profile>
          <Label>
            Name: {profileData.firstName} {profileData.lastName}
          </Label>
          <Label>Email: {profileData.username}</Label>
          <Label>Cohort: {profileData.cohort_name}</Label>
          <Label>Skills: </Label> <TextBox>{profileData.skills}</TextBox>
          <Label>Job Interests: </Label>{' '}
          <TextBox>{profileData.job_interests}</TextBox>
          <Label>About me: </Label> <TextBox>{profileData.about}</TextBox>
        </Profile>
        <Nav>
          <HomeButton to="/">Home</HomeButton>
          <PostButton to="/posts/new">Create a New Post</PostButton>
        </Nav>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
