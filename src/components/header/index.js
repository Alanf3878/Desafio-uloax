import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style"; 
import SimpleSlider from '../header/slide/index';

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
        alldata {
            headers {
                btnhome
                btncontact
                btntaxi
                btnbooking
                    logo {
                  url
                }
              }
        }
    }`)
    const{
       btncontact,
       btnbooking,
       btntaxi,
       logo,
       btnhome
    } = data.alldata.headers[0]
    return (
        <S.Container>
            <S.Headerbox>
            <S.Containernav>
                <S.Logo>
                <img src={logo.url}/>
                </S.Logo>
            <S.Itembtn>{btnhome}</S.Itembtn>
            <S.Itembtn>{btntaxi}</S.Itembtn>
            <S.Itembtn>{btnbooking}</S.Itembtn>
            <S.Itembtn>{btncontact}</S.Itembtn>
            </S.Containernav>
            </S.Headerbox>
            <SimpleSlider/>
        </S.Container>
     );
}
export default Header;