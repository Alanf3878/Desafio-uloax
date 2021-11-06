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
            titleour
            titlecard
            textwallet
            textsecured
            textrides
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
        <S.Maincontainer>
          <S.Title>
            <p>{titleuloax}</p>
          </S.Title>
          <S.Sectionbox>
          <S.Container>
               <S.Img src={imgpocket.url}/>
               <S.Sectiontext>
               <S.Texttitle>{titlepocket}</S.Texttitle>
               <p>{textrides}</p>
               <S.Boxbtn>
               <S.Btn>{btnbooknow}</S.Btn>
               </S.Boxbtn>
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
               <S.Img src={imgsecured.url}/>
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