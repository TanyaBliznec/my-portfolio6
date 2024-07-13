import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";
import {S} from "./Skills_Styles"


const skillsData = [
    {
        iconId: "html",
        width: "120px",
        height: "120px",
        viewBox: "0 0 120px 120px",
    },
    {
        iconId: "css",
        width: "120px",
        height: "120px",
        viewBox: "0 0 120px 120px",
    },
    {
        iconId: "js",
        width: "120px",
        height: "120px",
        viewBox: "0 0 120px 120px",
    },
    {
        iconId: "react",
        width: "113px",
        height: "113px",
        viewBox: "0 0 113px 113px",
    },
    {
        iconId: "vector",
        width: "105px",
        height: "100px",
        viewBox: "0 0 105px 100px",
    },
    {
        iconId: "bootstrap",
        width: "88px",
        height: "87px",
        viewBox: "0 0 88px 87px",
    },
    {
        iconId: "tailwind",
        width: "120px",
        height: "120px",
        viewBox: "0 0 120px 120px",
    },
    {
        iconId: "sass",
        width: "117px",
        height: "87px",
        viewBox: "0 0 117px 87px",
    },
    {
        iconId: "git",
        width: "105px",
        height: "105px",
        viewBox: "0 0 105px 105px",
    },
    {
        iconId: "greensock",
        width: "120px",
        height: "120px",
        viewBox: "0 0 120px 120px",
    },
    {
        iconId: "vscode",
        width: "112px",
        height: "112px",
        viewBox: "0 0 112px 112px",
    },
    {
        iconId: "github",
        width: "88px",
        height: "88px",
        viewBox: "0 0 88px 88px",
    }
]


export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText> Technologies I’ve been working with recently</SectionText>
                <S.SkillIcons>
                    <FlexWrapper justify={"space-around"} wrap={"wrap"}>

                        {skillsData.map((s, index) => {
                            return <S.IconWrap>
                                <Icon iconId={s.iconId} key={index}
                                width={s.width}
                                height={s.height}
                                viewBox={s.viewBox} />
                            </S.IconWrap>
                        })}

                    </FlexWrapper>
                </S.SkillIcons>
            </Container>
        </S.Skills>

    );
};
























