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
            <FlexWrapper justify={"space-between"} >
                <Wrap>
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <PlaceOfStudy>{props.place}</PlaceOfStudy>
                </Wrap>
                <Wrap>
                    <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <StudyPeriod>{props.period}</StudyPeriod>
                </Wrap>
            </FlexWrapper>
        </StyledEducation>
    );
};

const StyledEducation = styled.div`
height: 75px;
max-width: 705px;
margin: 35px 0 0;
position: relative;
/* outline: 3px solid black; */
&::before{
content: "";
display: inline-block;
width: 100%;
height: 2px ;
background: #ebeaed;

position: absolute;
top: 75px;
}
`
const Speciality = styled.h3`
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
`

const PlaceOfStudy = styled.span``


const StudyPeriod = styled.span``

const Wrap = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: #a7a7a7;`