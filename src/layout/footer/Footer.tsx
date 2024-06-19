import React from "react";
import { Icon } from "../../components/icon/Icon";
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";

const menuItems = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Icon iconId={"logo1"} />
                <Number>+91 12345 09876</Number>
                <Mail>info@example.com</Mail>
                <Icon iconId={"git-icon"} />
                <Icon iconId={"twitter"} />
                <Icon iconId={"linkedin"} />
            </FlexWrapper>
            <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                <Menu menuItems={menuItems} />
                <Text>Designed and built by Pavan MG with Love & Coffee</Text>
            </FlexWrapper>
        </StyledFooter>
    );
}

const StyledFooter = styled.section`
background-color: #ee8699;
min-height: 30vh;
`

const Number = styled.p`

`

const Mail = styled.p`

`

const Text = styled.p`

`
