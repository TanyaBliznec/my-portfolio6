import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { Menu } from "../menu/Menu";



export const DesktopMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems} />
        </StyledDesktopMenu>

    );

};

const StyledDesktopMenu = styled.nav`
margin-left: 275px;
ul{
    display: flex;
    gap: 60px;
}

@media ${theme.media.desktop} {
    display: none;
}

`




