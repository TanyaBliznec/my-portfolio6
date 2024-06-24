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
            <ProjectCodeList>
                <ProjectLink>
                    <Icon iconId={"link"} width={"20px"} height={"20px"} viewBox="0 0 20px 20px" />
                    <Link href={"#"}>Live Preview</Link>
                </ProjectLink>

                <ProjectLink>
                    <Icon iconId={"github"} width={"20px"} height={"20px"} />
                    <Link href={"#"}>View Code</Link>
                </ProjectLink>

            </ProjectCodeList>



        </StyledProject>
    );
};

const StyledProject = styled.div`
max-width: 375px;
padding: 35px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

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

const ProjectCodeList = styled.ul`
display: flex;
justify-content: space-between;
list-style-type: none;
padding: 0%;
width: 100%;
`

const ProjectLink = styled.li`

`