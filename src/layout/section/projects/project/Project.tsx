import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { theme } from "../../../../styles/Theme";

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
            <ProjectWrap>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <UsedStack><span>Tech stack : </span>{props.stack}</UsedStack>
                <ProjectLinkList>
                    <ProjectLink>
                        <Icon iconId={"link"} width={"20px"} height={"20px"} viewBox="0 0 20px 20px" />
                        <Link href={"#"}>Live Preview</Link>
                    </ProjectLink>

                    <ProjectLink>
                        <Icon iconId={"github"} width={"20px"} height={"20px"} fill={"#000000"} />
                        <Link href={"#"}>View Code</Link>
                    </ProjectLink>
                </ProjectLinkList>


            </ProjectWrap>
        </StyledProject>
    );
};

const StyledProject = styled.div`
max-width: 375px;
margin-bottom: 35px;
border-radius: 20px;

display: flex;
flex-direction: column;
align-items: center;
box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
background: #fff;
`

const Image = styled.img`
width: 375px;
height: 260px;
object-fit: cover;
border-radius: 20px 20px 0 0 ;
`

const ProjectWrap = styled.div`
padding: 25px 35px 25px 30px;
`

const Link = styled.a`
color: #000;
`
const Title = styled.h3`
font-weight: 500;
font-size: 28px;
line-height: 93%;
text-align: center;
color: #000;
`

const Text = styled.p`
font-weight: 300;

padding: 15px 0;
`

const UsedStack = styled.p`
font-size: 14px;
line-height: 162%;
color: ${theme.colors.fontTl};
margin: 0 0 20px;
span{
    font-size: 16px;
    font-weight: 400;
}
`

const ProjectLinkList = styled.ul`
display: flex;
justify-content: space-between;
padding: 0%;
width: 100%;
`

const ProjectLink = styled.li`
font-weight: 400;
font-size: 16px;
line-height: 162%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #000;
`