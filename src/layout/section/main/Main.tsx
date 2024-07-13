import React from "react";
import photo from '../../../assets/image/Photo/photo1.png'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap="wrap">
                    <div>
                        <S.SmallText>Hi <S.TextImg>👋</S.TextImg>,<br />My name is <br />
                            <S.NameText>Pavan MG </S.NameText>
                        </S.SmallText>
                        <S.MainTitle>A  Web Developer</S.MainTitle>
                    </div>
                    <S.Photo src={photo} alt="" />
                </FlexWrapper>
            </Container>

        </S.Main>
    );

};
























































