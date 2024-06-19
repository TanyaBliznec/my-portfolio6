import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";

export const LinkSocial = () => {
    return (
        <StyledLinkSocial>
            <a href="">
                <Icon iconId={'twitter'} />
            </a>
            <a href="">
                <Icon iconId={'git-icon'} />
            </a>
            <a href="">
                <Icon iconId={'linkedin'} />
            </a>
        </StyledLinkSocial>
    );

};

const StyledLinkSocial = styled.div`
display: flex;
justify-content: left;
padding-left: 60px;
`

