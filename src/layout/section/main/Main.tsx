import React from "react";
import styled from "styled-components";
import photo from '../../../assets/image/Photo/photo1.png'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <SmallText>Hi 👋,<br />My name is <br />
                            <NameText>Pavan MG </NameText>
                        </SmallText>
                        <MainTitle>A  Web Developer</MainTitle>
                    </div>
                    <Photo src={photo} alt="" />
                </FlexWrapper>
            </Container>

        </StyledMain>
    );

};

const StyledMain = styled.section`
display: flex;
`



const Photo = styled.img`
width: 350px;
height: 350px;
object-fit: cover;
border: 10px solid transparent;
border-radius: 50%;
background: linear-gradient(#eee, #eee 0) padding-box,
linear-gradient(#E70FAA, #00C0FD) border-box;

box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

`

const MainTitle = styled.h1`
color: ${theme.colors.fontTl};
font-weight: 700;
font-size: 58px;
line-height: 121%;
letter-spacing: -0.02em;

text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`

const SmallText = styled.h2`
color: ${theme.colors.fontTl};
font-weight: 700;
font-size: 58px;
line-height: 121%;
letter-spacing: -0.02em;

text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
const NameText = styled.h2`
font-weight: 700;
font-size: 58px;
line-height: 121%;
letter-spacing: -0.02em;
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`
