import styled from "styled-components";

export const Maincontainer = styled.div`
height: 150vh;
width: 100%;


`


export const Title = styled.div`
font-size: 35px;

display: flex;
justify-content: center;
padding: 5rem;

`

export const Container = styled.div` 
width: 70%;
display: flex;
height: 30vh ;



`
export const Sectionbox = styled.section`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;

`
export const Sectiontext = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
padding-left:2rem;
flex-direction: column;
font-size: 16px;

`
export const Texttitle = styled.p`
font-size: 23px;
`
export const Btn = styled.button`

margin-top: 1rem;
width: 160px;
height: 55px;
background-color: #f8ca11;
border: none;
color:#fff;
font-size: 15px;
&:hover {
        background-color:#353433;
        cursor: pointer;
    }`


export const Boxbtn = styled.div`


`
export const Img = styled.img`
width: 350px;
height: 250px;
`

export const Containerright = styled.div`
width: 70%;
display: flex;
height: 30vh ;
flex-direction: row-reverse;
`
export const Sectiontextright = styled.div`
width: 100%;
display: flex;
padding-right:2rem;
flex-direction: row-reverse;
flex-wrap: wrap;
text-align: end;
font-size: 16px;

`