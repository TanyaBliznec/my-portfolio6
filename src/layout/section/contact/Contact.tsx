import React from "react";

import styled from "styled-components";
import { Container } from "../../../components/Container";
import { font } from "../../../styles/Common";


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <Text>For any questions please mail me:</Text><br />
                <Email>hi@pavanmg.in</Email>
            </Container>
        </StyledContact>
    );
}

const StyledContact = styled.section`
text-align: center;
margin-top: 0;
`

const Text = styled.span`
${font({family: "'DM Sans', sans-serif", weight: 700, Fmax: 58, Fmin: 25})}
line-height: 121%;
letter-spacing: -0.02em;
color: #1e0e62;

`

const Email = styled.span`
${font({family: "'DM Sans', sans-serif", weight: 700, Fmax: 58, Fmin: 30})}
line-height: 121%;
letter-spacing: -0.02em;
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`