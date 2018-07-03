import React from 'react';
import Styled from 'styled-components';
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
<<<<<<< HEAD
  return (
    <div>
      <Headline>{props.post.title}</Headline>
      <Body>{props.post.body}...</Body>
      <Rating />
    </div>
  );
};
=======
    return (
        <div>
        <Headline>{props.post.title}</Headline>
        <Body>{props.post.body}...</Body>
        </div>
    )
}
>>>>>>> dc8fef5c7cda01e4e75c0a49a6864dfa5f2317c2

export default Post;
