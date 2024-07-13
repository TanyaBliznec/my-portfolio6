import styled from "styled-components";
import { font } from "../styles/Common";
import { theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
${font({weight: 700, Fmax: 48, Fmin: 36})}
line-height: 54%;
text-align: center;
color: ${theme.colors.fontTl};

@media ${theme.media.tablet}{

}
`