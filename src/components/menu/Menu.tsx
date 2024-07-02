import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { link } from "fs";


type StyledMenuPropsType = {
    color?: string
    weight?: string
    size?: string
    height?: string
}


export const Menu = (props: {
    color?: string ;
    weight?: string ;
    size?: string ;
    height?: string ;

    menuItems: Array<string>
}) => {
    return (
        <StyledMenu >
            <MenuItem>
                {props.menuItems.map((item: string, index: number) => {
                    return <MenuList key={index}>
                        <Link href="" color={props.color} weight={props.weight} size={props.size} height={props.height}> {item}</Link>
                    </MenuList>
                })}
            </MenuItem>
        </StyledMenu>

    );

};

const StyledMenu = styled.nav`

ul{
    display: flex;
    gap: 30px;
}

`
const MenuItem= styled.ul`

`

const MenuList= styled.li`
position: relative;
z-index: 0;
&:hover{
    transform: scale(1.2);

    &::before{
    content: "";
    display: inline-block;
    height: 1.5px;
    width:100%;
    background-color:${theme.colors.fontTl};
    position: absolute;
    bottom: 5px;
    z-index: -1;
    
    }
}
`

const Link = styled.a<StyledMenuPropsType>`
font-family: "DM Sans", sans-serif;
font-weight: ${props => props.weight || "500"};
font-size: ${props => props.size || "20px"};
line-height: ${props => props.height || "130%"};
text-align: center;
color: ${props => props.color || `${theme.colors.fontTx}`};
&:hover{
    color:${theme.colors.fontTl};
    font-weight: bold;
   }
`




