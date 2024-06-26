import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { LinkSocial } from "../../components/linkSocial/LinkSocial";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-evenly" align="center">
                    <Logo />
                    <Menu menuItems={items}  />
                    <LinkSocial />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
background-color: #e3eef0;
display: flex;
padding: 20px 0 ;
position: fixed;
left: 0;
top: 0;
right: 0;
z-index: 99999;
`

