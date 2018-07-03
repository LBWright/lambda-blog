import React from 'react';
import Styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Stars = Styled.div`
    display: flex;
`;

const Star = Styled.span`

`;

class Rating extends React.Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state= {
            stars: 3,
            totalStars: 3,
            totalRatings: 1,
            ratingPercentage: 100
        }
    }

    addStars = (value) => {
        this.setState({stars: value});
        this.incrementTotal();
        this.calculatePercentage();
    }

    incrementTotal = () => {
        this.setState({totalStars: this.state.totalStars + this.state.stars})
    }

    incrementRatings = () => {
        this.setState({totalRatings: this.state.totalRatings + 1})
    }

    calculatePercentage = () => {
        const newTotal = (this.state.totalStars / (this.state.totalRatings * 5)) * 100;
        this.setState({ratingPercentage: newTotal});
    }

    render(){
        return(
            <Stars>
            <FontAwesomeIcon icon='star' onClick={this.addStars(1)} /> 
            <FontAwesomeIcon icon='star' onClick={this.addStars(2)} />
            <FontAwesomeIcon icon='star' onClick={this.addStars(3)} />
            <FontAwesomeIcon icon='star' onClick={this.addStars(4)} />
            <FontAwesomeIcon icon='star' onClick={this.addStars(5)} />
            </Stars>
        )
    }
=======
  constructor(props) {
    super(props);
    this.state = {
      stars: 3,
      totalStars: 3,
      totalRatings: 1,
      ratingPercentage: 100
    };
  }

  addStars = value => {
    this.setState({ stars: value });
    this.incrementTotal();
    this.calculatePercentage();
  };

  incrementTotal = () => {
    this.setState({ totalStars: this.state.totalStars + this.state.stars });
  };

  incrementRatings = () => {
    this.setState({ totalRatings: this.state.totalRatings + 1 });
  };

  calculatePercentage = () => {
    const newTotal =
      (this.state.totalStars / (this.state.totalRatings * 5)) * 100;
    this.setState({ ratingPercentage: newTotal });
  };

  render() {
    return (
      <Stars>
        <FontAwesomeIcon icon="star" onClick={this.addStars(1)} />
        <FontAwesomeIcon icon="star" onClick={this.addStars(2)} />
        <FontAwesomeIcon icon="star" onClick={this.addStars(3)} />
        <FontAwesomeIcon icon="star" onClick={this.addStars(4)} />
        <FontAwesomeIcon icon="star" onClick={this.addStars(5)} />
      </Stars>
    );
  }
>>>>>>> c2cd3475ac331c1405ef36a9922342be3741bc62
}

export default Rating;
