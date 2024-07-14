import React from "react";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import {S} from "./Education_Styles"

type ExperiencePropsType = {
    specialityTitle: string
    place: string
    period: string
    smallText: string

}


export const Education: React.FC<ExperiencePropsType> = (props: ExperiencePropsType) => {
    return (
        <S.Education>
            <S.SpecialityWrap>
                <S.Speciality>{props.specialityTitle}</S.Speciality>
                <S.SmallText>{props.smallText}</S.SmallText>
            </S.SpecialityWrap>


            <FlexWrapper justify={"space-between"} wrap="wrap">
                <S.Wrap>
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <S.PlaceOfStudy>{props.place}</S.PlaceOfStudy>
                </S.Wrap>
                <S.Wrap className="two">
                    <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <S.StudyPeriod>{props.period}</S.StudyPeriod>
                </S.Wrap>
            </FlexWrapper>
        </S.Education>
    );
};





























































