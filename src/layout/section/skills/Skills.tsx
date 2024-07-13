import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <SkillIcons>
                    <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                        <IconWrap>
                            <Icon iconId={"html"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </IconWrap>
                        <IconWrap>
                            <Icon iconId={"css"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </IconWrap>
                        <IconWrap>
                            <Icon iconId={"js"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </IconWrap>
                        <IconWrap>
                            <Icon iconId={"react"} width={"113px"} height={"100px"} viewBox={"0 0 113px 100px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"vector"} width={"105px"} height={"100px"} viewBox={"0 0 105px 100px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"bootstrap"} width={"88"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"tailwind"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"sass"} width={"117px"} height={"87px"} viewBox={"0 0 117px 87px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"git"} width={"105px"} height={"105px"} viewBox={"0 0 105px 105px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"greensock"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"vscode"} width={"112px"} height={"112px"} viewBox={"0 0 112px 112px"} />
                        </IconWrap>
                        <IconWrap >
                            <Icon iconId={"github"} width="88" />
                        </IconWrap>
                    </FlexWrapper>
                </SkillIcons>
            </Container>
        </StyledSkills>

    );
};


const StyledSkills = styled.section`

${FlexWrapper} {
display: grid;
gap: 60px;
grid-template-columns: repeat(auto-fill, minmax(120px, auto));
@media ${theme.media.tablet} {
    gap: 35px;
}
@media ${theme.media.mobile} {
    gap: 20px;
}
}



`
const SkillIcons = styled.div`
max-width: 1191px;
margin: 0 auto;
`

const IconWrap = styled.div`
width: 120px;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
`
