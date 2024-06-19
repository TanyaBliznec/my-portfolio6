import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { LinkSocial } from "../../components/linkSocial/LinkSocial";


const items = ["Home", "About", "Tech Stack", "Projects", "Contact"]


export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu menuItems={items} />
            <LinkSocial />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
background-color: #e3eef0;
display: flex;
justify-content: center;

`

