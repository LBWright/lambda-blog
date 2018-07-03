import React from 'react';
import Post from './Post';
import TopFive from './Top-5';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';
import Search from './Search';

const Container = Styled.div`
    display: flex;

`;

const Sidebar = Styled.div`
    display: flex;
    flex-direction: column;
    width: 20%
    margin-left: 20px;
    padding: 20px;
    background: lightgray;
    align-items: center;
    box-shadow: 5px 5px darkgray;
`;

const PostsContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%
`;

const FeaturedContainer = Styled.div`
    background: rgb(147,29,37);
    width: 100%;
    display: flex;
    justify-content: center;
`

const Featured = Styled.div`
    border: 3px solid white;
    color: white;
    display: flex;
    width: 80%;
    height: 300px;
    margin: 50px;

`;

const FeatureText = Styled.div`
margin: 5%;
text-align: left;
`;

const FeaturedImg = Styled.img`
    width: 50%;
    height: auto;
`;

const PostBox = Styled.div`
    width: 60%;
    margin: auto;
    padding: 20px;
`;

const Head = Styled.h2`
    width: 55%;
    font-family: 'Times', serif;
    align-self: flex-start;
`

const Rule = Styled.hr`
    width: 40%;

`;

const Posts = props => {
    return (
        <Container>
            <Sidebar>
                <Search posts={props.posts} />
                <TopFive posts={props.posts}/>
            </Sidebar>
        <PostsContainer>
            <Head>Lambda Times</Head>
            <FeaturedContainer>
            <Featured>
                <FeaturedImg src='https://cdn-images-1.medium.com/max/1600/1*lcCQ6akUsQKjWTCdS28VAQ.png' />
                <FeatureText><h3>Featured post headline</h3>
                <p>Featured post body</p>
                </FeatureText>
                </Featured>
            </FeaturedContainer>
            {props.posts.map(post=> {
                return <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black'}}><PostBox><Post key={post.id} post={post} /></PostBox><Rule /></Link>
            })}
        
        </PostsContainer>
        </Container>
    )
}
export default Posts;