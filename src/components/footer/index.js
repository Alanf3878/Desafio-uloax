import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'


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
                    face{url}
                    twitter{url}
                    linkedin{url}
                    youtube{url}
                    insta{url}
                }
            }
        }`
    )

    const {
        face,
        twitter,
        linkedin,
        youtube,
        insta,
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
            <S.Container id="contact">
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
                        <S.ItemS> <S.Icon src={face.url} /> {itemfollow[0]}</S.ItemS>
                        <S.ItemS> <S.Icon src={twitter.url} /> {itemfollow[1]}</S.ItemS>
                        <S.ItemS> <S.Icon src={linkedin.url} /> {itemfollow[2]}</S.ItemS>
                        <S.ItemS> <S.Icon src={youtube.url} /> {itemfollow[3]}</S.ItemS>
                        <S.ItemS> <S.Icon src={insta.url} /> {itemfollow[4]}</S.ItemS>
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