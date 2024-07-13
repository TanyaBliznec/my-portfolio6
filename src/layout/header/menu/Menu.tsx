import React from "react";
import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <ul>
        {props.menuItems.map((item: string, index: number) => {
            return <ListItem key={index}>
                <Link href=""> {item}</Link>
            </ListItem>
        })}
    </ul>
);
};

const ListItem = styled.li`
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
