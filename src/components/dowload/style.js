import styled from "styled-components";

import Back from "../../images/img-6.png"

export const Container = styled.section`
  background-image: url(${Back});
  background-repeat: no-repeat;
  width: 100%;
  height: 767px;
`
export const BoxTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`
export const TitleBox = styled.div`
  position: relative;
  top: 108px;
  right: 35px;
`
export const Title = styled.h2`
  font-size: 50px;
  font-weight: normal;
  color: #24292b;
`
export const SubTitle= styled.h2`
  font-size: 50px;
  font-weight: normal;
  color: #fffcf4;
  margin-top: 30px;
`
export const Box = styled.div`
`
export const Cell = styled.img`
  margin-left: 1448px;
  position: relative;
  bottom: 56px;
`