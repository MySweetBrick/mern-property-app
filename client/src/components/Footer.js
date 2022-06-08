import React from 'react';
import {
    Background,
    FooterContainer,
    SocialContainer,
} from '../styles/Footer.styled';
import Social from '../images/Frame5.png';

function Footer() {
    return (
        <Background>
            <SocialContainer src={Social}></SocialContainer>
            <FooterContainer>© 2022 Auckland Property Management. All Rights Reserved</FooterContainer>
        </Background>
    );
};

export default Footer;