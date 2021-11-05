import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

import Face from "../../images/fb-icon.png"
import Twitter from "../../images/twitter-icon.png"
import Linkedin from "../../images/in-icon.png"
import Youtube from "../../images/youtube-icon.png"
import Instagram from "../../images/instagram-icon.png"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query{
            alldata{
                footers{
                    titleaddres
                    titlelink
                    itemlinks
                    titlefollow
                    itemfollow
                    textlorem
                    titlenew
                    btnsub
                    title2019
                }
            }
        }`
    )

    const {
        titleaddres,
        titlelink,
        itemlinks,
        titlefollow,
        textlorem,
        itemfollow,
        titlenew,
        btnsub,
        title2019
    } = data.alldata.footers[0]

    return (
        <div>
            <S.Container>
                <S.BoxContainer>
                <S.Adress>
                    <S.Title>{titleaddres}</S.Title>
                    <S.Paragraph>{textlorem}</S.Paragraph>
                </S.Adress>
                <S.Links>
                    <S.Title>{titlelink}</S.Title>
                    <S.List>
                        <S.Item>{itemlinks[0]}</S.Item>
                        <S.Item>{itemlinks[1]}</S.Item>
                        <S.Item>{itemlinks[2]}</S.Item>
                        <S.Item>{itemlinks[3]}</S.Item>
                        <S.Item>{itemlinks[4]}</S.Item>
                    </S.List>
                </S.Links>
                <S.Follow>
                    <S.Title>{titlefollow}</S.Title>
                    <S.ItemS> <S.Icon href="#" id="icon" src={Face} /> {itemfollow[0]}</S.ItemS>
                    <S.ItemS> <S.Icon href="#" id="icon" src={Twitter} /> {itemfollow[1]}</S.ItemS>
                    <S.ItemS> <S.Icon href="#" id="icon" src={Linkedin} /> {itemfollow[2]}</S.ItemS>
                    <S.ItemS> <S.Icon href="#" id="icon" src={Youtube} /> {itemfollow[3]}</S.ItemS>
                    <S.ItemS> <S.Icon href="#" id="icon" src={Instagram} /> {itemfollow[4]}</S.ItemS>
                </S.Follow>
                    <S.BoxInputBtn>
                        <S.Title>{titlenew}</S.Title>
                        <S.Input placeholder="Enter Your Email" />
                        <S.Button>{btnsub}</S.Button>
                    </S.BoxInputBtn>
                </S.BoxContainer>
            </S.Container>
                <S.Subtitle>{title2019}</S.Subtitle>
        </div>
    );
}

export default Footer;