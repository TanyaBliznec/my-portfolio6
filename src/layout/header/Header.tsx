import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { LinkSocialHeader } from "./linkSocialHeader/linkSocialHeader";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between"  align="center">
                    <Logo />
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                    <LinkSocialHeader/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
display: flex;
padding: 20px 0 ;
position: fixed;
left: 0;
top: 0;
right: 0;
z-index: 99999;
`
