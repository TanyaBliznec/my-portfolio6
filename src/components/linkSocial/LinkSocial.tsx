import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type LinkSocialPropsType = {
    fill?: string
}


export const LinkSocial = (props: LinkSocialPropsType) => {
    return (
        <StyledLinkSocial >
            <SociaLList>
                <SocialItem>
                    <SociaLLink>
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"git-icon"} fill={props.fill} />
                    </SociaLLink>
                </SocialItem>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink>
                            <Icon width={"31px"} height={"31px"} viewBox={"0 0 31px 31px"} iconId={"twitter"} fill={props.fill} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink >
                            <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"linkedin"} fill={props.fill} />
                        </SociaLLink>
                    </SocialItem>
                </SociaLList>
            </SociaLList>
        </StyledLinkSocial>
    );

};

const StyledLinkSocial = styled.div`
&:hover{
    cursor: pointer;
}
`




const SociaLList = styled.ul`
display: flex;
gap: 20px;
list-style-type: none;
`

const SocialItem = styled.li`

`

const SociaLLink = styled.a`

`