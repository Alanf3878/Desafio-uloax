import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

const Dowload = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          mains{
            downloadapp
  	        download
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
    imgcel,
    downloadapp,
    download
  } = data.alldata.mains[0]

  return (
    <S.Container ImgGrid={imgrides.url} >
      <S.BoxTitle>
        <S.TitleBox>
          <S.Title>{downloadapp}</S.Title>
          <S.SubTitle>{download}</S.SubTitle>
        </S.TitleBox>
      </S.BoxTitle>
      <S.Box>
        <S.Cell src={imgcel.url} ></S.Cell>
      </S.Box>
    </S.Container>
  );
}
export default Dowload;