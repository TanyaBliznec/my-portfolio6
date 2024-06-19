import React from "react";

import styled from "styled-components";


export const Contact = () =>{
    return(
        <StyledContact>
            <Text>For any questions please mail me:</Text><br/>
            <Email>hi@pavanmg.in</Email>
        </StyledContact>
    );
}

const StyledContact = styled.div`
background-color: #e855ed;
min-height: 20vh;
text-align: center;
`

const Text = styled.span`

`

const Email = styled.span`

`