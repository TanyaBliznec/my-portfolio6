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

}


export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>

            <GobTitle>{props.gobTitle}</GobTitle>
            <FlexWrapper justify={"space-between"}>
                <Wrap>
                    <Icon iconId={"building"} width={"16"} height={"12"} viewBox={"0 0 16 12"} />
                    <WorkPlace>{props.place}</WorkPlace>
                </Wrap>
                <Wrap>
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
background: #ebeaed;

position: absolute;
top: 75px;
}
`
const GobTitle = styled.h3`
font-weight: 400;
font-size: 20px;
line-height: 140%;
letter-spacing: 0.05em;
`

const WorkPlace = styled.span``



const Location = styled.span``


const WorkPeriod = styled.span``

const Wrap = styled.span`
font-weight: 500;
font-size: 12px;
line-height: 233%;
letter-spacing: 0.08em;
color: #a7a7a7;

`