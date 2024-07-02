import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";

type ExperiencePropsType = {
    gobTitle: string
    place: string
    location: string
    period: string
    smallText: string

}


export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>
            <GobWrap>
                <GobTitle>{props.gobTitle}</GobTitle>
                <SmallText>{props.smallText}</SmallText>
            </GobWrap>
            <FlexWrapper justify="space-between" >
                <Wrap>
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <WorkPlace>{props.place}</WorkPlace>
                </Wrap>
                <Wrap className="point">
                    <Icon iconId={"location"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <Location>{props.location}</Location>
                </Wrap>
                <Wrap>
                    <Icon iconId={"calendar"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <WorkPeriod>{props.period}</WorkPeriod>
                </Wrap>
            </FlexWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
height: 75px;
max-width: 705px;
margin: 35px 0;
position: relative;
&::before{
content: "";
display: inline-block;
width: 100%;
height: 2px ;
background-color: #ebeaed;

position: absolute;
top: 75px;
}

`

const GobWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const GobTitle = styled.h3`
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
`
const WorkPlace = styled.span``

export const SmallText = styled.span`
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

/* position: relative; */
/* z-index: 0; */
/*  */
/* &::before{ */
    /* content: ""; */
    /* display: inline-block; */
    /* background-color: #d7ffe0; */
/*  */
    /* position: absolute; */
    /* width: 84px; */
    /* height: 24px; */
    /* z-index: -1; */
    /* border-radius: 100px; */
    /* transform: translateX(-25%); */
/*      */
/* } */
`



const Location = styled.span``


const WorkPeriod = styled.span``

const Wrap = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: #a7a7a7;

`