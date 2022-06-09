// import { AppBar, Toolbar, Typography } from '@material-ui/core';

// const Navbar = () => {
//     return (
//         <AppBar position='static' style={{ background: '#2E3B55' }}>
//             <Toolbar>
//                 <Typography variant='h5'>Properties</Typography>
//             </Toolbar>
//         </AppBar>
//     );
// }


// export default Navbar;

import React from 'react';
import {
    NavbarContainer,
    TopContainer,
    TopLeft,
    TopRight,
    BottomContainer,
    LogoContainer,
    LinksContainer,
    LoginContainer,
    ContactButton,
    LoginButton,
    NavbarLinks,
    Logo,

} from '../styles/Navbar.styled';
// import LogoImg from '../'

function Navbar() {
    return (
        <>
            <NavbarContainer>
                <TopContainer>
                    <TopLeft></TopLeft>
                    <TopRight>
                        Need Risk Free Management?
                        <ContactButton>Contact Us</ContactButton>
                    </TopRight>
                </TopContainer>
                <BottomContainer>
                    <LogoContainer>
                    <a href='/'>
                        <Logo src={process.env.PUBLIC_URL + `/Auckland-Property-Management-Web-Logo.jpeg`} ></Logo>
                    </a>
                    </LogoContainer>
                    <LinksContainer>
                        <NavbarLinks href='results'>Find A Rental</NavbarLinks>
                        <NavbarLinks href='propertyPage'>List A Rental</NavbarLinks>
                        <NavbarLinks>Commercial</NavbarLinks>
                        <NavbarLinks>Waiheke Escape</NavbarLinks>
                        <NavbarLinks>About Us</NavbarLinks>
                        <NavbarLinks>FAQ & Help</NavbarLinks>
                    </LinksContainer>
                    <LoginContainer>
                        <LoginButton>Register | Login</LoginButton>
                    </LoginContainer>
                </BottomContainer>
            </NavbarContainer>
        </>
    )
}

export default Navbar;