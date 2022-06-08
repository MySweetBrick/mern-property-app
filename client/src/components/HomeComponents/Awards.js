import React from 'react';
import { 
    Background,
    SingleAwardImage,
    MultiAwardImage,
    TeamImage,
} from '../../styles/Awards.styled.js';

import {
    ButtonContainer,
} from '../../styles/Break.styles';

import SingleAward from '../../images/award_top.png';
import MultiAward from '../../images/awardBottom.png';
import Team from '../../images/staff.png'

function Awards () {
    return (
        <Background>
            <ButtonContainer>Our Awards from Leading Property Managers of New Zealand</ButtonContainer>
            <SingleAwardImage src={SingleAward}></SingleAwardImage>
            <MultiAwardImage src={MultiAward}></MultiAwardImage>
            <TeamImage src={Team}></TeamImage>
        </Background>
    );
};

export default Awards;