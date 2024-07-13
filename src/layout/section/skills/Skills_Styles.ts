import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { theme } from "../../../styles/Theme"

const Skills = styled.section`

${FlexWrapper} {
display: grid;
gap: 60px;
grid-template-columns: repeat(auto-fill, minmax(120px, auto));
@media ${theme.media.tablet} {
    gap: 35px;
}
@media ${theme.media.mobile} {
    gap: 20px;
}
}


`
const SkillIcons = styled.div`
max-width: 1191px;
margin: 0 auto;
`

const IconWrap = styled.div`
width: 120px;
height: 120px;
display: flex;
justify-content: center;
align-items: center;
`

export const S = {
    Skills,
    SkillIcons,
    IconWrap    
}