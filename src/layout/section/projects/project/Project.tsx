import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import {S} from "../Projects_Styles"

type ProjectPropsType = {
    title: string
    text: string
    src: string
    stack: string
}


export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.src} alt="" />
            <S.ProjectWrap>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.UsedStack><span>Tech stack : </span>{props.stack}</S.UsedStack>
                <S.ProjectLinkList>
                    <S.ProjectLink>
                        <Icon iconId={"link"} width={"20px"} height={"20px"} viewBox="0 0 20px 20px" />
                        <S.Link href={"#"}>Live Preview</S.Link>
                    </S.ProjectLink>

                    <S.ProjectLink>
                        <Icon iconId={"github"} width={"20px"} height={"20px"} />
                        <S.Link href={"#"}>View Code</S.Link>
                    </S.ProjectLink>
                </S.ProjectLinkList>


            </S.ProjectWrap>
        </S.Project>
    );
};

































































