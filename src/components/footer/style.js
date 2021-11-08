import styled from "styled-components";

import BollList from "../../images/bulit-icon.png"

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #292828;
  margin-top: 80px;
`

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #292828;
  margin-top: 20px;
`

export const Adress = styled.div`
  display: flex;
  background-color: #292828;
  flex-direction: column;
  color: #ffffff;
  width: 16%;
  height: 288px;
  padding: 0 15px;
  margin-right: 20px;
`
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  color: #ebebeb;
  text-align: left;
  width: 250px;
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  height: 288px;
  width: 14%;
  background-color: #292828;
  @media (max-width: 992px){
    padding: 0;
    width: 50%;
  }
`
export const List = styled.ul`
  list-style-image: url(${BollList});
  margin-left: 17px;
`

export const Item = styled.li`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 0.6rem;
  cursor: pointer;
  &:hover{
    color: #F8CA11;
    transition: all 0.3s ease 0s;
    animation: 5s ease 0s 1normal none running fdBcwW;
  }
`

export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 288px;
  background-color: #292828;
  width: 13%;
`

export const ItemS = styled.li`
  display: flex;
  color: #FFFFFF;
  font-size: 16px;
  margin-bottom: 9px;
  cursor: pointer;
  &:hover{
  color: #F8CA11;
  transition: all 0.3s ease 0s;
  animation: 5s ease 0s 1normal none running fdBcwW;
  }
`

export const BoxInputBtn = styled.div`
  height: 288px;
  width: 255px;
`

export const Icon = styled.img`
  margin-right: 10px;
`

export const Button = styled.div`
  width: 153px;
  height: 48px;
  border: 0;
  color: #ebebeb;
  background-color: #FECF3D;
  text-align: center;
  padding: 13px 0px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 16px;
  border-radius: 5px;
  cursor: pointer;
`

export const Input = styled.input`
  width: 100%;
  color: #eceaea;
  font-size: 16px;
  height: 48px;
  border-radius: 5px;
  padding: 10px;
  outline: none;
  border: 0;
  @media (max-width: 992px){
    width: 100%;
  }
`

export const Title = styled.h3`
  padding: 25px 0;
  font-size: 28px;
  color: #ebebeb;
  font-weight: bold;
`

export const Subtitle = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin: 20px;
`