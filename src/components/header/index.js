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
            <S.Itembtn><a href="#home">{btnhome}</a></S.Itembtn>
            <S.Itembtn><a href="#taxi">{btntaxi}</a></S.Itembtn>
            <S.Itembtn><a href="#booking">{btnbooking}</a></S.Itembtn>
            <S.Itembtn><a href="#contact">{btncontact}</a></S.Itembtn>
            </S.Containernav>
            </S.Headerbox>
            <SimpleSlider/>
        </S.Container>
     );
}
export default Header;