import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

type ExperiencePropsType = {
    specialityTitle: string
    place: string
    period: string
    smallText: string

}


export const Education = (props: ExperiencePropsType) => {
    return (
        <StyledEducation>
            <SpecialityWrap>
                <Speciality>{props.specialityTitle}</Speciality>
                <SmallText>{props.smallText}</SmallText>
            </SpecialityWrap>


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
background-color: #ebeaed;

position: absolute;
top: 75px;

@media ${theme.media.tablet} {
    top: 70px; 
}
}

@media ${theme.media.tablet}{
    margin: 15px 0;
    height: 100%;
    ${FlexWrapper}{
        flex-grow: 1;
    }
}
`

const SpecialityWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 2px;
`

const Speciality = styled.h3`
${font({Fmax:20, Fmin: 17})}
font-weight: 400;
line-height: 140%;
letter-spacing: 0.05em;
`

 const SmallText = styled.span`
font-weight: 600;
font-size: 9px;
line-height: 289%;
text-align: center;
color: #018c0f;

display: flex;
width: 84px; 
height: 24px; 
background-color: #d7ffe0;
border-radius: 100px;
justify-content: center;
align-items: center;
`

const PlaceOfStudy = styled.span``


const StudyPeriod = styled.span``

const Wrap = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: #a7a7a7;

@media ${theme.media.tablet} {
    font-weight: 400;
    font-size: 9px;
}
`