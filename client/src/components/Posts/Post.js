import React from 'react';
import Styled from 'styled-components';
import Rating from './Rating';

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
    <div>
      <Headline>{props.post.title}</Headline>
      <Body>{props.post.body}...</Body>
      <Rating />
    </div>
  );
};

export default Post;
