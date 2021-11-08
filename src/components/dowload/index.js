import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

import Phone from "../../images/img-7.png"

const Dowload = () => {

  // const data = useStaticQuery(graphql`
  //   query {
  //       alldata {
  //         mains{
  //         }
  //       }
  //   }`
  // )

  // const {
  // } = data.alldata.mains[0]

  return (
    <S.Container>
      <S.BoxTitle>
        <S.TitleBox>
          <S.Title>DOWNLOAD</S.Title>
          <S.SubTitle>OUR APP TODAY</S.SubTitle>
        </S.TitleBox>
      </S.BoxTitle>
      <S.Box>
        <S.Cell href="#" id="icon" src={Phone}></S.Cell>
      </S.Box>
    </S.Container>
  );
}
export default Dowload;