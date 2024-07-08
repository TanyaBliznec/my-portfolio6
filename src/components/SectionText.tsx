import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

export const SectionText = styled.p`
${font({Fmax: 35, Fmin: 20})}
font-size: 32px;
line-height: 81%;
text-align: center;
margin: 0 0 115px;
@media ${theme.media.tablet}{
    margin: 0 0 80px;
}
`