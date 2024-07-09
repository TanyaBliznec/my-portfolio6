import React from "react";
import { Icon } from "../../components/icon/Icon";

import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { LinkSocial } from "../../components/linkSocial/LinkSocial";

import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { FooterMenu } from "./footerMenu/FooterMenu";
import { font } from "../../styles/Common";


const menuItems = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Wrap>
                    <IconPosition>
                        <Icon iconId={"logo1"} width={"95px"} height={"60"}
                            viewBox={"0 0 95 60"} />
                    </IconPosition>

                    <WrapContact>
                        <Number>+91 12345 09876</Number>
                        <Mail>info@example.com</Mail>
                        <LinkSocial color={`${theme.colors.fontTl}`} />
                    </WrapContact>
                </Wrap>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <FooterMenu menuItems={menuItems} />
                    <Text>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></Text>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
padding: 0 0 60px;
display: flex;

${FlexWrapper}{
        gap: 30px;
    @media screen and (max-width: 1006px){
        justify-content: center;
        

        @media ${theme.media.tablet} {
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
        }
    }
}


${Container}{
    position: relative;
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

}
`

const Wrap = styled.div`
    margin: 0 0 90px;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;

    &::before{
        content: "";
        display: inline-block;
        width: 100%;
        height: 2px;
        background-color: ${theme.colors.fontTx};
        opacity: 0.3;

        position: absolute;
        top: 100px; 

        @media ${theme.media.tablet} {
            opacity: 0;
        }     
        }
`

const IconPosition = styled.div`
@media ${theme.media.tablet} {
    position: absolute;
    top: 0;
    left: 30px;
    transform: translateY(120px);
}
`


const WrapContact = styled.div`
max-width: 600px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;

@media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
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
${font({ family: '"DM Sans", sans-serif', weight: 500, Fmax: 20, Fmin: 15 })}
text-align: center;

span{
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
`

