import React from 'react';
import Styled from 'styled-components';
import {Link} from 'react-router-dom';


const HeaderContainer = Styled.div`
    padding: 20px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 800px) {
        padding: 20px;
    }
`;
const LogoContainer = Styled.a`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    text-decoration: none;
`;

const LogoText = Styled.h1`
    font-family: 'Times', serif;
    font-size: 22px;
    font-weight: light;
    color: black;
    margin: 0 0 20px 10px;
`;

const Links = Styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between;
`;

const MenuLink = Styled.h3`
    font-family: 'PT Sans', sans-serif;
    font-style: light;
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    margin: 20px;
    `;

const LogoImage = Styled.img`
width: 35px;
height: auto;
align: left;
`;




const Header = () => {
    return (
        <HeaderContainer>
        <LogoContainer href='https://lambdaschool.com/'>
        <LogoImage src='data:image/png;base64,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' />
        <LogoText>Lambda</LogoText>
        </LogoContainer>
        <Links>
            <MenuLink>Majors</MenuLink>
            <MenuLink>About</MenuLink>
            <MenuLink>Blog</MenuLink>
            <MenuLink>Apply</MenuLink>
           <Link to="/login" style={{ textDecoration: 'none', color: 'black'}}><MenuLink>Login</MenuLink></Link>
        </Links>
        </HeaderContainer>
        

    )
}

export default Header;