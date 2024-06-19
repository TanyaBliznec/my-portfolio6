import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

type ExperiencePropsType = {
    specialityTitle: string
    place: string
    period: string

}


export const Education = (props: ExperiencePropsType) => {
    return (
        <StyledEducation>
            <Speciality>{props.specialityTitle}</Speciality>
            <FlexWrapper >
                <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                <PlaceOfStudy>{props.place}</PlaceOfStudy>
                <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                <StudyPeriod>{props.period}</StudyPeriod>
            </FlexWrapper>
        </StyledEducation>
    );
};

const StyledEducation = styled.div`
`
const Speciality = styled.h3``

const PlaceOfStudy = styled.span``


const StudyPeriod = styled.span``