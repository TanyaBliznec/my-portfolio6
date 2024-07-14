import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

export const SectionText = styled.p`
${font({Fmax: 32, Fmin: 20})}
line-height: 1.2;
text-align: center;
padding: 49px 0 110px;
@media ${theme.media.tablet}{
    padding: 49px 0 50px;
}
`