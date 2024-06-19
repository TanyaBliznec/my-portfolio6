import React from "react";
import styled from "styled-components";
import photo from '../../../assets/image/Photo/photo1.png'
import { FlexWrapper } from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
            <div>
                <span>Hi 👋,<br />My name is <br />Pavan MG </span>
                <MainTitle>A  Web Developer</MainTitle>
            </div>

            <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    );

};

const StyledMain = styled.div`
min-height: 30vh;
background-color: #b0ed95;
`



const Photo = styled.img`
width: 350px;
height: 350px;
border-radius: 50%;
object-fit: cover;
border: 10px solid;
border-color: #eda1ef;
`

const MainTitle = styled.h1`

`

