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
                    <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"html"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                            </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"css"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"js"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"react"} width={"113px"} height={"100px"} viewBox={"0 0 113px 100px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"vector"} width={"105px"} height={"100px"} viewBox={"0 0 105px 100px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"bootstrap"} width={"88"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"tailwind"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"sass"} width={"117px"} height={"87px"} viewBox={"0 0 117px 87px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"git"} width={"105px"} height={"105px"} viewBox={"0 0 105px 105px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"greensock"} width={"120px"} height={"120px"} viewBox={"0 0 120px 120px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"vscode"} width={"112px"} height={"112px"} viewBox={"0 0 112px 112px"} />
                        </div>
                        <div style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon iconId={"github"} width="88" />
                        </div>
                    </FlexWrapper>
                </SkillIcons>
            </Container>
        </StyledSkills>

    );
};


const StyledSkills = styled.section`

${FlexWrapper} {
gap: 80px;

}



`
const SkillIcons = styled.div`
max-width: 1191px;
margin: 0 auto;

`






