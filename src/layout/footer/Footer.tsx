import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { LinkSocial } from "../../components/linkSocial/LinkSocial";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { FooterMenu } from "./footerMenu/FooterMenu";
import {S} from "./Footer_Styles"

const menuItems = ["Home", "About", "Technologies", "Projects", "Contact"]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.Wrap>
                    <S.IconPosition>
                        <Icon iconId={"logo1"} width={"95px"} height={"60"}
                            viewBox={"0 0 95 60"} />
                    </S.IconPosition>

                    <S.WrapContact>
                        <S.Number href="tel:+91 12345 09876">+91 12345 09876</S.Number>
                        <S.Mail href="mailto:info@example.com">info@example.com</S.Mail>
                        <LinkSocial color={`${theme.colors.fontTl}`} />
                    </S.WrapContact>
                </S.Wrap>

                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <FooterMenu menuItems={menuItems} />
                    <S.Text>Designed and built by <span>Pavan MG</span> with <span>Love</span> & <span>Coffee</span></S.Text>
                </FlexWrapper>
                
            </Container>
        </S.Footer>
    );
}























































































