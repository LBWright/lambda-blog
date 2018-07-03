import React from 'react';
import Styled from 'styled-components';
import Axios from 'axios';

const TopFiveContainer = Styled.div`
    
`;

const BlogBox = Styled.div`
    width: 150px;
    height: 150px
    border: 1px solid lightgray;
`

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
                {this.props.posts.map(post => {
                    return  <div><BlogBox><h3>{post.title}</h3></BlogBox>
                    <hr /></div>
                })}
            
            </TopFiveContainer>
        )
    }
}

export default TopFive;