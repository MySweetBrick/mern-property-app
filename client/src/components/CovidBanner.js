import React from 'react';
import { 
    Background, 
    BannerContainer, 
    LeftSide, 
    RightSide,
    Header,
    GreyBar,
    Body,

} from '../styles/CovidBanner.styled';

function CovidBanner() {
    return (
        <Background>
            <BannerContainer>
                <LeftSide></LeftSide>
                <RightSide>
                    <Header>COVID-19 UPDATE – <br />
                    PROTECTION FRAMEWORK – <br />
                    ORANGE</Header>
                    <GreyBar></GreyBar>
                    <Body>Updated Thursday, 14 April 2022 <br /> <br />
                    Our offices in Auckland and on Waiheke Island are open during business hours and are operating in accordance with the Government’s Orange ‘Traffic Light’ Framework. <br /> <br />
                    Please note that all visitors to our premises are required to wear masks and maintain social distancing. <br /> <br />
                    Stay safe and follow the guidelines. <br /> <br />
                    From the team at Auckland Property Management. <br /> <br />
                    Read more
                    </Body>
                </RightSide>
            </BannerContainer>
        </Background>
    );
};

export default CovidBanner;