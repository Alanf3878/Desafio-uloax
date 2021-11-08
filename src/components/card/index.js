import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

import Car from "../../images/img-2.png"

const Card = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          mains{
            titleour
            titletaxi
            card
            titlecard
            informcard
          }
        }
    }`
    )

  const {
    titleour,
    titletaxi,
    card,
    titlecard,
    informcard
  } = data.alldata.mains[0]

  return (
    <S.Container id = "taxi">
      <S.Boxtitle>
        <S.TitleOur>{titleour}</S.TitleOur>
        <S.TitleTaxi>{titletaxi}</S.TitleTaxi>
      </S.Boxtitle>
      <S.BoxCard>
        <S.Card>
          <S.Number>{card[0]}</S.Number>
          <S.TitleCar>{titlecard[0]}</S.TitleCar>
          <S.ParagraphCar>{informcard}</S.ParagraphCar>
          <S.ImgCar href="#" id="icon" src={Car} ></S.ImgCar>
        </S.Card>
        <S.Card>
          <S.Number>{card[1]}</S.Number>
          <S.TitleCar>{titlecard[1]}</S.TitleCar>
          <S.ParagraphCar>{informcard}</S.ParagraphCar>
          <S.ImgCar href="#" id="icon" src={Car} ></S.ImgCar>
        </S.Card>
        <S.Card>
          <S.Number>{card[2]}</S.Number>
          <S.TitleCar>{titlecard[2]}</S.TitleCar>
          <S.ParagraphCar>{informcard}</S.ParagraphCar>
          <S.ImgCar href="#" id="icon" src={Car}></S.ImgCar>
        </S.Card>
      </S.BoxCard>
    </S.Container>
  );
}
export default Card;