import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby';

const Main = () => {

    const data = useStaticQuery(graphql`
    query {
        alldata {
          mains{
            titleuloax
            titletaxi
            titlesecured
            titlerides
            titlepocket
            btnbooknow
            titlecard
            textwallet
            textsecured
            textrides
            titlewith
            imgsecured {
              url
            }
            imgpocket {
              url
            }

          
            
        }
    }
    }`
  )
  const{
    titleuloax,
    titlewith,
    textwallet,
    btnbooknow,
    titlesecured,
    imgsecured,
    imgwallet,
    textsecured,
    titlepocket,
    imgpocket,
    titlerides,
    textrides
 } = data.alldata.mains[0]

    return ( 
        <S.Maincontainer id ="booking">
          <S.Title>
            <S.Boxtitle>
            <p>{titleuloax}</p>
            <S.ParaghTitle>{titlewith}</S.ParaghTitle>
            </S.Boxtitle>
            
            <S.Backline></S.Backline>
          </S.Title>
          <S.Sectionbox>
          <S.Container>
               <S.Img src={imgpocket.url}/>
               <S.Sectiontext>
               <S.Texttitle>{titlepocket}</S.Texttitle>
               <p>{textwallet}</p>
            
               <S.Btn>{btnbooknow}</S.Btn>
         
              </S.Sectiontext>
          </S.Container>

          
          <S.Containerright>
               <S.Img src={imgsecured.url}/>
               <S.Sectiontextright>
               <S.Texttitle>{titlepocket}</S.Texttitle>
               <p>{textrides}</p>
               <S.Btn>{btnbooknow}</S.Btn>
              </S.Sectiontextright>
          </S.Containerright>


          <S.Container>
               <S.Img src={imgpocket.url}/>
               <S.Sectiontext>
               <S.Texttitle>{titlepocket}</S.Texttitle>
               <p>{textrides}</p>
               <S.Btn>{btnbooknow}</S.Btn>
              </S.Sectiontext>
          </S.Container>

          <S.Containerright>
               <S.Img src={imgpocket.url}/>
               <S.Sectiontextright>
               <S.Texttitle>{titlepocket}</S.Texttitle>
               <p>{textrides}</p>
               <S.Btn>{btnbooknow}</S.Btn>
              </S.Sectiontextright>
          </S.Containerright>

          </S.Sectionbox>
    
        </S.Maincontainer>
     );
}
export default Main;