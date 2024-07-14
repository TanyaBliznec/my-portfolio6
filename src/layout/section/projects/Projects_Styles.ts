import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";


const Projects = styled.section`
${FlexWrapper}{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, auto));
    gap: 15px;
}
`

const Project = styled.div`
max-width: 375px;
width: 100%;
margin-bottom: 45px;
border-radius: 20px;

display: flex;
flex-direction: column;
align-items: center;
box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
background-color: #fff;

@media ${theme.media.mobile} {
    margin-bottom: 20px;
}
`

const Image = styled.img`
max-width: 375px;
width: 100%;
height: 260px;
object-fit: cover;
border-radius: 20px 20px 0 0 ;
`

const ProjectWrap = styled.div`
padding: 22px 35px 25px 30px;
`

const Link = styled.a`
color: #000;
`
const Title = styled.h3`
font-weight: 500;
font-size: 28px;
line-height: 93%;
text-align: center;
color: #000;
`

const Text = styled.p`
font-weight: 300;

padding: 15px 0;
`

const UsedStack = styled.p`
font-size: 14px;
line-height: 162%;
color: ${theme.colors.fontTl};
margin: 0 0 20px;
span{
    font-size: 16px;
    font-weight: 400;
}
`

const ProjectLinkList = styled.ul`
display: flex;
justify-content: space-between;
padding: 0%;
width: 100%;
`

const ProjectLink = styled.li`
font-weight: 400;
font-size: 16px;
line-height: 162%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #000;
display: flex;
gap: 10px;
align-items: center;
`

export const S ={
    Projects,
    Project,
    Image,
    ProjectWrap,
    Link,
    Title,
    Text,
    UsedStack,
    ProjectLinkList,
    ProjectLink
}