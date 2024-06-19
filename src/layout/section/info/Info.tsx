import React from "react";
import styled from "styled-components";
import { Experience } from "../../../components/experience/Experience";
import { Education } from "../../../components/education/Education";


export const Info = () => {
    return (
        <StyledInfo>
            <InfoTitle>About Me</InfoTitle>
            <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
            <InfoTitle>Work Experience</InfoTitle>
            <Experience  gobTitle={"Junior Web Developer"} place={"Dr. Rajkumar’s Learning App"} location={"Bengaluru"} period={"Sep 2021 - Dec 2021"} />
            <Experience  gobTitle={"Web Development Intern"} place={"IonPixelz Web Solutions"} location={"Bengaluru"} period={"Sep 2021 - Dec 2021"} />
            <Experience  gobTitle={"SEO / SEM Specialist"} place={"HAAPS"} location={"Bengaluru"} period={"Sep 2021 - Dec 2021"} />
            <InfoTitle>Education</InfoTitle>
            <Education specialityTitle={"Bachelor in Electronics & Communication"} place={"Bangalore Instutute of Technology"} period={"Aug 2015 - Dec 2020"}/>
        </StyledInfo>
    )
}


const StyledInfo = styled.div`
background-color: #c1e5f4;
min-height: 30vh;
`

const InfoTitle = styled.h2`

`