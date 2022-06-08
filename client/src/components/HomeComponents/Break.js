import React from 'react';
import {
    Background,
    BreakHeader,
    ButtonContainer,
    ButtonInnerContainer,
    BreakButtons,
} from '../../styles/Break.styles.js';

function Break() {
    return (
        <Background>
            <BreakHeader>Property investment is best when everything is running smoothly. <br />
                Our focus on reducing or removing your risks ill make sure it does.</BreakHeader>
            <ButtonContainer>
                Our Other Services
                <ButtonInnerContainer>
                    <BreakButtons>Request a rental appraisal</BreakButtons>
                    <BreakButtons>waiheke escape</BreakButtons>
                </ButtonInnerContainer>
            </ButtonContainer>
        </Background>
    );
};

export default Break;