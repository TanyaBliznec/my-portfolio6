import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type ProjectPropsType = {
    title: string
    text: string
    src: string
    stack: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <UsedStack><b>Tech stack :</b>{props.stack}</UsedStack>
            <Icon iconId={"link"} width={"20px"} height={"20px"}/>
            <Link href={"#"}>Live Preview</Link>
            <Icon iconId={"github"} width={"20px"} height={"20px"}/>
            <Link href={"#"}>View Code</Link>
        </StyledProject>
    );
};

const StyledProject = styled.div`
min-width: 350px;
width: 33%;
`

const Image = styled.img`
width: 375px;
height: 260px;
object-fit: cover;
border-top-left-radius: 10%;
border-top-right-radius: 10%;
`

const Link = styled.a`

`
const Title = styled.h3`

`

const Text = styled.p`

`

const UsedStack = styled.p`

`