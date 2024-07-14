import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

type LinkSocialPropsType = {
    color?: string
    hoverColor?: string
}


export const LinkSocial: React.FC<LinkSocialPropsType> = (props: LinkSocialPropsType) => {
    return (
        <StyledLinkSocial >
            <SociaLList>
                <SocialItem>
                    <SociaLLink color={props.color} hoverColor={props.hoverColor} >
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"git-icon"} />
                    </SociaLLink>
                </SocialItem>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink color={props.color} hoverColor={props.hoverColor}>
                            <Icon width={"31px"} height={"31px"} viewBox={"0 0 31px 31px"} iconId={"twitter"} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink color={props.color} hoverColor={props.hoverColor}>
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

export const SociaLLink = styled.a<LinkSocialPropsType>`
display: flex;
color:${props => props.color};

position: relative;
z-index: 0;

&:hover{
    color:${props => props.hoverColor};
    transform: scale(1.2);
}

`