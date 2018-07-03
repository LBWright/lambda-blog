import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';

const TopFiveContainer = Styled.div`
    
`;

const BlogBox = Styled.div`
    width: 150px;
    height: 150px
    border: 1px solid lightgray;
`;

const PostHead = Styled.h3`
font-family: 'PT Sans', sans-serif;
    font-style: light;
    text-align: left;
`;

class TopFive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topFive: []
        }
    }

  componentDidMount() {     
        this.setState({ topFive: this.props.posts });
   
    }

    render() {
        return (
            <TopFiveContainer>
                <h4>Recent Posts</h4>
                {this.props.posts.map(post => {
                    return  <div><BlogBox><PostHead>{post.post_title}</PostHead></BlogBox>
                    <hr /></div>
                })}
            
            </TopFiveContainer>
        )
    }
}

export default TopFive;