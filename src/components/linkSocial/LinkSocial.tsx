import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type LinkSocialPropsType = {
    color?: string
}


export const LinkSocial = (props: LinkSocialPropsType) => {
    return (
        <StyledLinkSocial >
            <SociaLList>
                <SocialItem>
                    <SociaLLink color={props.color}>
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"git-icon"} />
                    </SociaLLink>
                </SocialItem>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink color={props.color}>
                            <Icon width={"31px"} height={"31px"} viewBox={"0 0 31px 31px"} iconId={"twitter"} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink color={props.color}>
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkedin"} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
            </SociaLList>
        </StyledLinkSocial>
    );

};

const StyledLinkSocial = styled.div`
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
color:${props => props.color};

&:hover{
    color: ${theme.colors.fontTl};
    filter: drop-shadow(0px 0px 20px #3B3E82) ;
    transform: scale(1.5);
} 
`