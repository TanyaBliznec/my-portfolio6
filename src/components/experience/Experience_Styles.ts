import styled from "styled-components"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"
import { FlexWrapper } from "../FlexWrapper"

const Experience = styled.div`
height: 75px;
max-width: 705px;
position: relative;
border-bottom: 2px solid;

${FlexWrapper}{
    display: grid;
    grid-template-columns: 220px 235px 160px;
    grid-auto-rows: minmax(15px, auto);
    gap:10px;
.three{
    justify-self: end;
}
@media ${theme.media.tablet}{
    grid-template-columns:repeat(3, 1fr);
    
}
    
}
`

const GobWrap = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 2px;
`
const GobTitle = styled.h3`
${font({Fmax:20, Fmin: 17})}
font-weight: 400;
line-height: 140%;
letter-spacing: 0.05em;
`
const WorkPlace = styled.span``

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



const Location = styled.span``


const WorkPeriod = styled.span``

const Wrap = styled.div`
display: flex;
font-weight: 500;
font-size: 12px;
line-height: 1.2;
letter-spacing: 0.08em;
color: #a7a7a7;
@media ${theme.media.tablet} {
    font-weight: 400;
    font-size: 10px;
}
`


export const S = {
    Experience,
    GobWrap,
    GobTitle,
    WorkPlace,
    SmallText,
    Location,
    WorkPeriod,
    Wrap
}