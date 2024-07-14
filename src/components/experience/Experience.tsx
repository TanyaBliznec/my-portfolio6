import React from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";


import {S} from "./Experience_Styles"

type ExperiencePropsType = {
    gobTitle: string
    place: string
    location: string
    period: string
    smallText: string

}


export const Experience: React.FC<ExperiencePropsType> = (props: ExperiencePropsType) => {
    return (
        <S.Experience>
            <S.GobWrap>
                <S.GobTitle>{props.gobTitle}</S.GobTitle>
                <S.SmallText>{props.smallText}</S.SmallText>
            </S.GobWrap>
            <FlexWrapper justify="space-between" wrap="wrap">
                <S.Wrap>
                <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <S.WorkPlace>{props.place}</S.WorkPlace>
                </S.Wrap>
                <S.Wrap>
                    <Icon iconId={"location"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <S.Location>{props.location}</S.Location>
                </S.Wrap>
                <S.Wrap className="three">
                    <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <S.WorkPeriod>{props.period}</S.WorkPeriod>
                </S.Wrap>
            </FlexWrapper>
        </S.Experience>
    );
};





























































