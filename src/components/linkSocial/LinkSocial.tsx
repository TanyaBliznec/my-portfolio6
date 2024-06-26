import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";




export const LinkSocial = () => {
    return (
        <StyledLinkSocial>
            <SociaLList>
                <SocialItem>
                    <SociaLLink>
                        <Icon width={"30px"} height={"30px"} viewBox={"0 0 30px 30px"} iconId={"git-icon"} />
                    </SociaLLink>
                </SocialItem>
                <SociaLList>
                    <SocialItem>
                        <SociaLLink>
                            <Icon width={"31px"} height={"31px"} viewBox={"0 0 31px 31px"} iconId={"twitter"}/>
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
        </StyledLinkSocial>
    );

};

const StyledLinkSocial = styled.div`
display: flex;
justify-content: left;

`

const SociaLList = styled.ul`
display: flex;
list-style-type: none;
`

const SocialItem = styled.li`

`

const SociaLLink = styled.a`

`