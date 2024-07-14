import React from "react";
import styled from "styled-components";
import { Experience } from "../../../components/experience/Experience";
import { Education } from "../../../components/education/Education";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

const infoData = [
    {
        gobTitle: "Junior Web Developer",
        place: "Dr. Rajkumar’s Learning App",
        location: "Bengaluru",
        period: "Sep 2021 - Dec 2021",
        smallText: "Full Time"
    },
    {
        gobTitle: "Web Development Intern",
        place: "IonPixelz Web Solutions",
        location: "Bengaluru",
        period: "Sep 2021 - Dec 2021",
        smallText: "Internship"
    },
    {
        gobTitle: "SEO / SEM Specialist",
        place: "HAAPS",
        location: "Bengaluru",
        period: "Sep 2021 - Dec 2021",
        smallText: "Full Time"
    }

]

export const Info: React.FC = () => {
    return (
        <StyledInfo>
            <Container>
                <Wrap>
                    <InfoTitle>About Me</InfoTitle>
                    <Description>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</Description>
                    <InfoTitle>Work Experience</InfoTitle>

                    {infoData.map((e, index) => {
                        return <Experience key={index}
                            gobTitle={e.gobTitle}
                            place={e.place}
                            location={e.location}
                            period={e.period}
                            smallText={e.smallText} />
                    })}

                    <InfoTitle>Education</InfoTitle>
                    <Education specialityTitle={"Bachelor in Electronics & Communication"} place={"Bangalore Instutute of Technology"} period={"Aug 2015 - Dec 2020"} smallText={"Full Time"} />
                </Wrap>
            </Container>
        </StyledInfo>
    )
}


const StyledInfo = styled.section`
display: flex;
justify-content: start;


`

const Wrap = styled.div`
max-width: 710px;
`


const InfoTitle = styled.h2`
padding: 38px 0 34px;
`

const Description = styled.p`
@media ${theme.media.tablet} {

}
`