import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <SectionText> Technologies I’ve been working with recently</SectionText>
            <FlexWrapper justify={"space-between"} wrap={"wrap"}>
            <Icon iconId={"html"} width={"120px"} height={"120px"} />
            <Icon iconId={"css"} width={"120px"} height={"120px"} />
            <Icon iconId={"js"} width={"120px"} height={"120px"} />
            <Icon iconId={"react"} width={"120px"} height={"120px"} />
            <Icon iconId={"vector"} width={"120px"} height={"120px"} />
            <Icon iconId={"bootstrap"} width={"120"} height={"120px"} />
            <Icon iconId={"tailwind"} width={"120px"} height={"120px"} />
            <Icon iconId={"sass"} width={"120px"} height={"120px"} />
            <Icon iconId={"git"} width={"120px"} height={"120px"} />
            <Icon iconId={"greensock"} width={"120px"} height={"120px"} />
            <Icon iconId={"vscode"} width={"120px"} height={"120px"} />
            <Icon iconId={"github"} width={"120px"} height={"120px"} />
            </FlexWrapper>
        </StyledSkills>

    );
};


const StyledSkills = styled.section`
background-color: #acf931;
min-height: 100vh;

${FlexWrapper} {
    gap: 20px;

}




`






