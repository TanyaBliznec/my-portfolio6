import styled from "styled-components";
import { theme } from "../../styles/Theme";


const Header = styled.header`
display: flex;
padding: 40px 0 100px;

@media ${theme.media.tablet} {
    padding: 40px 0 50px; 
}
/*  */
/* position: fixed; */
/* left: 0; */
/* top: 0; */
/* right: 0; */
/* z-index: 99999; */
// `


export const S = {
    Header,
}