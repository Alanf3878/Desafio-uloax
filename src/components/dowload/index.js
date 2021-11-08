import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

const Dowload = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          mains{
            imgrides{
              url
            }
            imgcel{
              url
            }
          }
        }
    }`
  )

  const {
    imgrides,
    imgcel
  } = data.alldata.mains[0]

  return (
    <S.Container ImgGrid={imgrides.url} >
      <S.BoxTitle>
        <S.TitleBox>
          <S.Title>DOWNLOAD</S.Title>
          <S.SubTitle>OUR APP TODAY</S.SubTitle>
        </S.TitleBox>
      </S.BoxTitle>
      <S.Box>
        <S.Cell src={imgcel.url} ></S.Cell>
      </S.Box>
    </S.Container>
  );
}
export default Dowload;