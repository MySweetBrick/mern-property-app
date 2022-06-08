import React from 'react';
import {
    Background,
    BannerContainer,
    Header,
    GreyBar,
    Body,
    
} from '../../styles/CovidBanner.styled';

import {
    ContactUsButton,
    LeftSide,
    RightSide,
    AboutUsContainer,
} from '../../styles/AboutUs.styled.js';

function AboutUs () {

    return (
        <Background>
            <BannerContainer>
                <LeftSide>
                    <AboutUsContainer>
                    <Header>ABOUT US</Header>
                    <GreyBar></GreyBar>
                    <Body>Since 1991, Auckland Property Management have specialised in residential property management, and commercial and body corporate property management across the Auckland region (and in many cases wider New Zealand). During this time, we’ve built an enviable reputation of providing a high quality management service to our clients, based on our proactive, flexible and dependable approach to managing our client’s properties. Outside of our service, there’s one key area that sets us apart.</Body>
                    <Body>Read More About APM.</Body>
                    </AboutUsContainer>
                    <ContactUsButton>Contact us</ContactUsButton>
                </LeftSide>
                <RightSide></RightSide>
            </BannerContainer>
        </Background>
    );
};

export default AboutUs;