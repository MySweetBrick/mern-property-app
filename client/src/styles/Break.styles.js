import styled from "styled-components";

export const Background = styled.div`
    width: 1920px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BreakHeader = styled.div`
    width: 1600px;
    height: 125px;
    background: #BF163D;
    border-radius: 20px;
    color: white;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
padding-top: 119px;
    color: #BF163D;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const BreakButtons = styled.button`
    width: 400px;
    height: 80px;
    border-radius: 10px;
    border: 1.415px solid #BF163D;
    box-shadow: 0px 2.83px 7.075px rgba(0, 0, 0, 0.25);
    background-color: white;
    text-transform: uppercase;
    margin: 50px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 18px;
`;