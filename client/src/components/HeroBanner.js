import React from 'react';
import {
    Background,
    BannerContainer,
    HeaderBody,
    HeaderColorContainer,
    HeaderContainer,
    Heading,
} from '../styles/HeroBanner.styled';

function HeroBanner() {
    return (
        <>
            <Background>
                <BannerContainer>
                    <HeaderColorContainer>
                        <HeaderContainer>
                            <HeaderBody>WELCOME TO</HeaderBody>
                            <Heading>Auckland <br />
                                Property <br />
                                Management</Heading>
                            Auckland’s home of reduced risk residential,commercial and body corporate property management
                        </HeaderContainer>

                    </HeaderColorContainer>
                </BannerContainer>
            </Background>
        </>
    );
};

export default HeroBanner;