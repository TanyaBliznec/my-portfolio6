import React from "react";
import styled from "styled-components";


type StyledMenuPropsType = {
color?: string
}


export const Menu = (props: {
    color?: string | "#666666"; menuItems: Array<string>
}) => {
    return (
        <StyledMenu >
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <li key={index}>
                        <Link href="" color = {props.color}>{item}</Link>
                    </li>
                })}
            </ul>
        </StyledMenu>

    );

};

const StyledMenu = styled.nav`

ul{
    display: flex;
    gap: 30px;
}

`


const Link = styled.a<StyledMenuPropsType>`
font-family: "Dm sans", sans-serif;
color: ${props=> props.color || "#666666"};
`