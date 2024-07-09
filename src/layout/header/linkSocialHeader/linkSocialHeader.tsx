import React from "react";

import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { theme } from "../../../styles/Theme";




export const LinkSocialHeader = () => {
    return (
        <StyledLinkSocialHeader >
            <SociaLList>
                <SocialItem>
                    <SociaLLink>
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"git-icon"} />
                    </SociaLLink>
                </SocialItem>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink>
                            <Icon width={"31px"} height={"31px"} viewBox={"0 0 31px 31px"} iconId={"twitter"} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink>
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkedin"} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
            </SociaLList>
        </StyledLinkSocialHeader>
    );

};

const StyledLinkSocialHeader = styled.div`
margin-right: 15px;
@media  ${theme.media.tablet}{
position: absolute;
right: 100px;
}
`




const SociaLList = styled.ul`
display: flex;
gap: 20px;
list-style-type: none;
`

const SocialItem = styled.li`

`

export const SociaLLink = styled.a`
display: flex;
color: ${theme.colors.fontTx};

position: relative;
z-index: 0;

&:hover{
    transform: scale(1.2);

    &::before{
        content: "";
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
    }
}

`