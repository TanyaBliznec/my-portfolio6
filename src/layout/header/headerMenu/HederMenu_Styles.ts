import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme"


//Menu

const MenuItem = styled.li`
position: relative;
z-index: 0;
&:hover{
    transform: scale(1.2);
    
    &::before{
    content: "";
    display: inline-block;
    height: 1.5px;
    width:100%;
    background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
    position: absolute;
    bottom: 5px;
    z-index: -1;
}
}
`

const Link = styled.a`
font-family: "DM Sans", sans-serif;
font-weight: 500;
font-size: 20px;
line-height: 130%;
text-align: center;
color:${theme.colors.fontTx};

&:hover{
background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
 font-weight: bold;
}
`

// MobileMenu

const MobileMenu = styled.nav`
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 99999;
display: none;
background-color: #6666664f;
${props => props.isOpen && css<{ isOpen: boolean }>`
display: flex;
justify-content: center;
align-items: center;
`}

ul{
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    
}
`

const BurgerButton = styled.button <{ isOpen: boolean }>`
position: fixed;
top: -77px;
right: -100px;
width: 200px;
height: 200px;
z-index: 9999;
background-color:${theme.colors.primaryBg};
border: 0;



span{
display: block;
width: 36px;
height: 2px;
background-color: ${theme.colors.fontTx};


position: absolute;
left: 40px;
bottom: 50px;

${props => props.isOpen && css<{ isOpen: boolean }>`
background-color: white;
`}


&::before{
    content: "";
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.fontTx};
    position: absolute;
    transform: translateY(-10px );

    ${props => props.isOpen && css<{ isOpen: boolean }>`
    color: white;
    transform: rotate(-45deg) translateY(0);
`}
}

&::after{
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.fontTx};
    position: absolute;
    transform: translateY( 10px );

${props => props.isOpen && css<{ isOpen: boolean }>`
    color: white;
    width: 36px;
    transform: rotate(45deg) translateY(0);
`}
}
}

`


//DesktopMenu

const DesktopMenu = styled.nav`

ul{
    display: flex;
    gap: 30px;
}
`

export const S = {
    MenuItem,
    Link,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
    
}