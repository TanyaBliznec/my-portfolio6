import React from "react";
import styled from "styled-components";


type StyledMenuPropsType = {
    color?: string
    weight?: string
    size?: string
    height?: string
}


export const Menu = (props: {
    color?: string | "#666666";
    weight?: string | "500";
    size?: string | "520px";
    height?: string | "130%";

    menuItems: Array<string>
}) => {
    return (
        <StyledMenu >
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <li key={index}>
                        <Link href="" color={props.color} weight={props.weight} size={props.size} height={props.height}> {item}</Link>
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
font-family: "DM Sans", sans-serif;
font-weight: ${props => props.weight || "500"};
font-size: ${props => props.size || "20px"};
line-height: ${props => props.height || "130%"};
text-align: center;
color: ${props => props.color || "#666666"};
`




