import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 1920px;
    height: 181px;
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    background-color: #BF163D;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 80px;
    background-color: #BF163D;
    color: white;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 18px;
    display: flex;
    flex-direction: row;
`;

export const TopLeft = styled.div`
    flex: 66%;
    /* background-color: pink; */

`;

export const TopRight = styled.div`
    flex: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    background-color: white;

`;

export const LogoContainer = styled.div`
    flex: 20%;
    /* background-color: thistle; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LinksContainer = styled.div`
    flex: 60%;
    /* background-color: wheat; */
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LoginContainer = styled.div`
    flex: 20%;
    /* background-color: whitesmoke; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactButton = styled.button`
    width: 200px;
    height: 46px;
    background-color: white;
    color: #BF163D;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
    border: #BF163D;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const NavbarLinks = styled.a`
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 18px;
    text-decoration: none;
    color: black;
`;

export const LoginButton = styled.button`
    width: 200px;
    height: 46px;
    background-color: #BF163D;
    color: white;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 18px;
    border-radius: 5px;
    padding: 10px;
    margin: 15px;
    border: #BF163D;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
    width: 158px;
    height: 57px;
`;