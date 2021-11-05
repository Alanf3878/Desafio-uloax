import React from 'react'
import * as S from "./style";
import { graphql, useStaticQuery } from 'gatsby'

const Dowload = () => {

  const data = useStaticQuery(graphql`
    query {
        alldata {
          mains{
            titletaxi
            card
            titlecard
            informcard
          }
        }
    }`
  )

  const {
    titletaxi,
    card,
    titlecard,
    informcard
  } = data.alldata.mains[0]

  return (
    <S.Container>
      <div>
        {titletaxi}
        {card}
        {titlecard}
        {informcard}
      </div>
    </S.Container>
  );
}
export default Dowload;