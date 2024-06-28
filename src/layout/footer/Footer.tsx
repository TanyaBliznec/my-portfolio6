import React from "react";
import { Icon } from "../../components/icon/Icon";

import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { LinkSocial } from "../../components/linkSocial/LinkSocial";

import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { Menu } from "../../components/menu/Menu";


const menuItems = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrap>
                    <Icon iconId={"logo1"} width={"95px"} height={"60"} viewBox={"0 0 95 60"} />
                    <WrapContact>
                        <Number>+91 12345 09876</Number>
                        <Mail>info@example.com</Mail>
                        <LinkSocial fill={"#42446e"} />
                    </WrapContact>
                </Wrap>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Menu menuItems={menuItems} color={"#42446e"} weight="400" size="18px" height="144%" />
                    <Text>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></Text>
                </FlexWrapper>

            </Container>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
padding: 0 0 60px;
`

const Wrap = styled.div`
    margin: 0 0 90px;
    position: relative;
    display: flex;
    justify-content: space-between;


    &::before{
        content: "";
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: #666666;
        opacity: 0.3;

        position: absolute;
        top: 100px;      
        }
`
const WrapContact = styled.div`
width: 50%;
flex-direction: row;
display: flex;
justify-content: space-between;
`


const Number = styled.p`
font-family: "DM Sans", sans-serif;
color: ${theme.colors.fontTl};
`

const Mail = styled.p`
font-family: "DM Sans", sans-serif;
color: ${theme.colors.fontTl};
`

const Text = styled.p`
span{
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
`

