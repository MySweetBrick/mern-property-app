import styled from "styled-components";
import img from '../images/top1.png'

export const Background = styled.div`
    width: 1920px;
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BannerContainer = styled.div`
    width: 1600px;
    height: 400px;
    background-image: url(${img});
    border-radius: 20px;
`;

export const HeaderColorContainer = styled.div`
    width: 550px;
    height: 400px;
    background-color: #BF163D;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
    color: white;
    font-family: 'Open Sans';
`;

export const HeaderContainer = styled.div`
    width: auto;
    height: 400px;
    padding: 20px;
`;

export const Heading = styled.h1`

    text-transform: uppercase;
    /* padding: 10px; */
    font-size: 60px;
    line-height: 55px;
    letter-spacing: -0.015em;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeaderBody = styled.p`
    /* padding: 10px; */
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;