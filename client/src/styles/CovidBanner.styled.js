import styled from "styled-components";
import img from '../images/top-covid.png';

export const Background = styled.div`
    width: 1920px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BannerContainer = styled.div`
    width: 1600px;
    height: 600px;
    border-radius: 30px;
    box-shadow: 0px 4px 20px rgba(129, 129, 129, 0.25);
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    height: 600px;
    width: 740px;
    flex: 50%;
    background-image: url(${img});
    background-size: cover;
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
`;

export const RightSide = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: left;
`;

export const Header = styled.div`
    margin: 30px;
    text-transform: uppercase;
    color: #BF163D;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 40px;
`;

export const GreyBar = styled.div`
    width: 686px;
    height: 1px;
    margin-left: 30px;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const Body = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #222222;
    margin: 30px;
    line-height: 20px;
`;