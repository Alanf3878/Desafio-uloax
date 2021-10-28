import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style"; 

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        alldata {
            headers {
                btnhome
                titlebooknow
                btnbooking
                btncontact
                btnsearch
                btntaxi
                btnseta
                imgcar {
                  url
                }
                telephone
                titlebooknow
                textinput
                text
                logo {
                  url
                }
            }
        }
    }`)
    const{
       btncontact,
       btnseta,
       btnbooking,
       btnsearch,
       btntaxi,
       logo,
       titlebooknow,
       btnhome,
       telephone,
       text,
       textinput,
       imgcar
    } = data.alldata.headers[0]

    return (
        <S.Container>
            <S.Containernav>
                <S.Logo>
                <img src={logo.url}/>
                </S.Logo>
            <S.Itembtn>{btnhome}</S.Itembtn>
            <S.Itembtn>{btntaxi}</S.Itembtn>
            <S.Itembtn>{btnbooking}</S.Itembtn>
            <S.Itembtn>{btncontact}</S.Itembtn>
            </S.Containernav>

            <S.Containerslide>
             <S.Boxcar>
              <S.Boxyellow>
                <S.Paragraph>{titlebooknow}</S.Paragraph>
                <> <h2>{telephone}</h2> </>
              </S.Boxyellow>
              <img src={imgcar.url}/>
            </S.Boxcar>
            <S.Inputcontainer>
                <S.Paragraph>{text}</S.Paragraph>
                <S.Formcontainer>
                    <S.Inputbox>
                        <S.Intemtext>
                        <p>{textinput}</p>
                        </S.Intemtext>
                    <S.Iteminput type="text" placeholder="PICKUP"/>
                    <S.Iteminput type="text" placeholder="DROP"/>
                    <S.Iteminput type="text" placeholder="WHEN"/>
                    <S.Search>{btnsearch}</S.Search>
                    </S.Inputbox>
                </S.Formcontainer>
            </S.Inputcontainer>
            </S.Containerslide>
        </S.Container>
     );
}
export default Header;