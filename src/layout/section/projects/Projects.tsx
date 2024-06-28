import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import styled from "styled-components";
import { Project } from "./project/Project";
import { FlexWrapper } from "../../../components/FlexWrapper";
import proj1Img from "../../../assets/image/Photo/proj1.png"
import proj2Img from "../../../assets/image/Photo/proj2.png"
import proj3Img from "../../../assets/image/Photo/proj3.png"
import proj4Img from "../../../assets/image/Photo/proj4.png"
import proj5Img from "../../../assets/image/Photo/proj5.png"
import proj6Img from "../../../assets/image/Photo/proj6.png"
import { SectionText } from "../../../components/SectionText";
import { Container } from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Project title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        src={proj1Img}
                        stack={"HTML, JavaScript, SASS, React"} />

                    <Project title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        src={proj2Img}
                        stack={"HTML , JavaScript, SASS, React"} />

                    <Project title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        src={proj3Img}
                        stack={"HTML , JavaScript, SASS, React"} />

                    <Project title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        src={proj4Img}
                        stack={"HTML , JavaScript, SASS, React"} />

                    <Project title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        src={proj5Img}
                        stack={"HTML , JavaScript, SASS, React"} />

                    <Project title={"Project Tile goes here"}
                        text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                        src={proj6Img}
                        stack={"HTML , JavaScript, SASS, React"} />
                </FlexWrapper>

            </Container>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
min-height:100vh;
`