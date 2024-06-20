import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { FlexWrapper } from "../FlexWrapper";

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
`
const GobTitle = styled.h3``

const WorkPlace = styled.span``



const Location = styled.span``


const WorkPeriod = styled.span``

const Wrap = styled.span``