import React from "react";
import { Container } from "../../../components/Container";
import {S} from "./Contact_Styles"


export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <S.Text>For any questions please mail me:</S.Text><br />
                <S.Email href="mailto:hi@pavanmg.in">hi@pavanmg.in</S.Email>
            </Container>
        </S.Contact>
    );
}


















