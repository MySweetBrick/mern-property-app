import styled from "styled-components";
import img from '../images/aboutAs.png'


export const RightSide = styled.div`
    height: 600px;
    width: 740px;
    flex: 50%;
    background-image: url(${img});
    background-size: cover;
    border-bottom-right-radius: 30px;
    border-top-right-radius: 30px;
`;

export const LeftSide = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: left; */
`;

export const AboutUsContainer = styled.div`
    margin-left: 40px;
`;

export const ContactUsButton = styled.button`
    width: 196px;
    height: 60px;
    background-color: #BF163D;
    border-radius: 4px;
    color: white;
    text-transform: uppercase;
    border: none;
   margin-left: 67px;
`;