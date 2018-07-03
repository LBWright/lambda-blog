import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
//import Rating from './Rating';

const Headline = Styled.h3`
    font-family: 'PT Sans', sans-serif;
    font-style: light;
    text-align: left;
`;

const Body = Styled.p`
    font-family: 'PT Sans', sans-serif;
    font-style: light;
    font-size: 14px;
    text-align: left;
`;

const Post = props => {
    return (
        <div><Link to={`/posts/${props.post.id}`} style={{ textDecoration: 'none', color: 'black'}}>
        <Headline>{props.post.title}</Headline></Link>
        <Body>{props.post.body}...</Body>
        </div>
    )
}

export default Post;
