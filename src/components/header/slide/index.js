import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as S from "./style";

const Slide = () => {
   
  const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          btnsearch
          btnseta
          btnsetaright
          telephone
          titlebooknow
          textinput
          text
          imgcar {
            url
          }
        }
      }
    }
  `);
  const {
    btnseta,
    btnsetaright,
    btnsearch,
    titlebooknow,
    telephone,
    text,
    textinput,
    imgcar,
  } = data.alldata.headers[0];

  return (
      <S.Containerslide>
        <S.Containerseta>
          <S.Btnseta>{btnseta}</S.Btnseta>
          <S.Btnseta>{btnsetaright}</S.Btnseta>
        </S.Containerseta>
        <S.Boxcar>
          <S.Boxyellow>
            <S.Bookparagraph>{titlebooknow}</S.Bookparagraph>
            <S.Telephone>{telephone}</S.Telephone>
          </S.Boxyellow>
          <S.Yellowcar src={imgcar.url} />
        </S.Boxcar>
        <S.Inputcontainer>
          <S.Paragraph>{text}</S.Paragraph>
          <S.Formcontainer>
            <S.Inputbox>
              <S.Intemtext>
                <p>{textinput}</p>
              </S.Intemtext>
              <S.Iteminput type="text" placeholder="PICKUP" />
              <S.Iteminput type="text" placeholder="DROP" />
              <S.Iteminput type="text" placeholder="WHEN" />
              <S.Search>{btnsearch}</S.Search>
            </S.Inputbox>
          </S.Formcontainer>
        </S.Inputcontainer>
      </S.Containerslide>
  );
};
export default Slide;
