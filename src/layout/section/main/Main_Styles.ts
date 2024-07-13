import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { font } from "../../../styles/Common"
import { theme } from "../../../styles/Theme"

const Main = styled.section`
display: flex;

@media ${theme.media.tablet}{
        text-align: center;
        ${FlexWrapper}{
        justify-content: center;
    }
}
`



const Photo = styled.img`
width: 350px;
height: 350px;
object-fit: cover;
border: 10px solid transparent;
border-radius: 50%;
background: linear-gradient(#eee, #eee 0) padding-box,
linear-gradient(#E70FAA, #00C0FD) border-box;

box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

@media ${theme.media.tablet}{
    width: 340px;
    height: 340px;
    border-radius: 50%;
    margin-top: 30px;
    }

`

const MainTitle = styled.h1`
${font({weight: 700, Fmax: 58, Fmin: 36})}
color: ${theme.colors.fontTl};
line-height: 1.3;
letter-spacing: -0.02em;

text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

`

const SmallText = styled.h2`
${font({weight: 700, Fmax: 58, Fmin: 36})}
color: ${theme.colors.fontTl};
line-height: 1.3;
letter-spacing: -0.02em;

text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`

const TextImg = styled.span`
display: inline-block;
transition: 0.2s;
&:hover{
    transform: scale(1.5) rotate(45deg);
}
`

const NameText = styled.h2`
${font({weight: 700, Fmax: 58, Fmin: 36})}
line-height: 121%;
letter-spacing: -0.02em;
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`


export const S = {
    Main,
    Photo,
    MainTitle,
    SmallText,
    TextImg,
    NameText,
}