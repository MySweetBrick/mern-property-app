import styled from "styled-components";
import img from '../images/listing1.png'

export const Background = styled.div`
    width: 1920px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ResultContainer = styled.div`
    /* background-color: rebeccapurple; */
    width: 1067px;
    height: auto;
    /* display: flex;
    flex-direction: column; */
    margin-top: 20px;
    margin-bottom: 40px;
`;

export const PropertyContainer = styled.div`
background-color: white;
    width: 1067px;
    height: 245px;
    border: 2px solid #F0CCCC;
    filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

export const ToggleBar = styled.div`
    width: 1920px;
    height: 40px;
    border: 1px solid #E5E5E5;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const ToggleBarContainer = styled.div`
    width: 80px;
    height: 31px;
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    /* background-color: rosybrown; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px;
`;

export const Icon = styled.img`
    width: 25px;
    height: 25px;
    /* padding-right: 15px;
    padding-left: 50px; */
    margin: 7px;
`;


export const ImageContainer = styled.div`
    width: 344px;
    height: 245px;
    background-image: url(${img});
    /* background-size: cover; */
`;

export const DetailsContainer = styled.div`
    /* background-color: maroon; */
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
    margin: 25px 0px 25px 20px;
    font-family: 'Open Sans';
`;

export const BinocularContainer = styled.div`
    /* background-color: mediumvioletred; */
    width: 43px;

`;

export const AddressContainer = styled.div`
    font-size: 18px;
`;

export const PriceContainer = styled.div`
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const IconCounter = styled.div`
    width: 100px;
    display: flex;
    align-items: center;
`;