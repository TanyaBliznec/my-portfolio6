import React from "react";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { LinkSocial } from "../../components/linkSocial/LinkSocial";
import { theme } from "../../styles/Theme";


const menuItems = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper  wrap={"wrap"} justify={"space-between"}>
                <Icon iconId={"logo1"} width={"95px"} height={"60"} viewBox={"0 0 95 60"} />
                <Number>+91 12345 09876</Number>
                <Mail>info@example.com</Mail>
                <LinkSocial/>
            </FlexWrapper>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Menu menuItems={menuItems} color={"#42446e"} />
                <Text>Designed and built by Pavan MG with Love & Coffee</Text>
            </FlexWrapper>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
background-color: #ee8699;
min-height: 30vh;
`

const Number = styled.p`

`

const Mail = styled.p`

`

const Text = styled.p`

`

