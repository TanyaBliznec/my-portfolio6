import styled from "styled-components"
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { font } from "../../styles/Common"
import { theme } from "../../styles/Theme"

const Footer = styled.footer`
padding: 100px 0 60px;
display: flex;

${FlexWrapper}{
    padding-top: 45px;
    height: auto;
        gap: 30px;
    @media screen and (max-width: 1006px){
        justify-content: center;
        

        @media ${theme.media.tablet} {
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
            padding-top: 0;
        }
    }
}


${Container}{
    position: relative;
    @media ${theme.media.tablet} {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

}

@media ${theme.media.mobile} {
    padding: 50px 0 60px;
}
`

const Wrap = styled.div`
    padding-bottom: 40px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;

    border-bottom: 2px solid green;

    @media ${theme.media.tablet}{
        border-bottom: 0;
        padding-bottom: 85px;
    }
`

const IconPosition = styled.div`
display: flex;
justify-content: center;
align-items: center;
@media ${theme.media.tablet} {
    position: absolute;
    top: 0;
    left: 30px;
    transform: translateY(120px);
}
`


const WrapContact = styled.div`
max-width: 600px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;



@media ${theme.media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
`


const Number = styled.a`
font-family: "DM Sans", sans-serif;
color: ${theme.colors.fontTl};
`

const Mail = styled.a`
font-family: "DM Sans", sans-serif;
color: ${theme.colors.fontTl};
`

const Text = styled.p`
${font({ family: '"DM Sans", sans-serif', weight: 500, Fmax: 20, Fmin: 15 })}
text-align: center;

span{
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}
`

export const S ={
    Footer,
    Wrap,
    IconPosition,
    WrapContact,
    Number,
    Mail,
    Text
}

