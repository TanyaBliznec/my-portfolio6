import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { font } from "../../../styles/Common";



export const FooterMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href=""> {item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>

    );

};

const StyledHeaderMenu = styled.nav`
ul{
    display: flex;
        gap: 30px;

@media ${theme.media.tablet} {
    gap: 5px;
    flex-direction: column;
    align-items: center;
}
}
`


const ListItem = styled.li`
position: relative;
z-index: 0;
&:hover{
    transform: scale(1.2);
}
`

const Link = styled.a`
${font({family: '"DM Sans", sans-serif', weight: 500, Fmax:20, Fmin: 15})}
line-height: 130%;
text-align: center;
color:${theme.colors.fontTx};


&:hover{
    transform: scale(1.2);
}
`