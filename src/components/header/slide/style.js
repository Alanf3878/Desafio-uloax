import styled from 'styled-components'

export const Containerslide = styled.section`
width: 100%;
height: 65vh;
display: flex;
justify-content: space-evenly;
padding-top: 1rem;
padding-left: 3rem;
`
export const Boxyellow = styled.div`
width: 88%;
height: 145px;
background-color: #f8ca11;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const Formcontainer = styled.form`
width: 95%;
height: 70%;
background-color: #fff;
display: flex;
justify-content: center;
text-align: center;
`
export const Inputbox = styled.div`
width: 90%;
flex-direction: column;
display: flex;
align-items: self-end;
`
export const Iteminput = styled.input`
border: none;
width: 100%;
height: 30px;
font-size: 20px;
padding: 20px 20px 20px 20px;
outline: none;
margin-top: 1rem;
background: #e1e1e1;
border-radius: 5px;
`
export const Boxcar = styled.div`
width: 45%;
height: 100%;
flex-wrap: wrap;
display: flex;
justify-content: center;
`
export const Boxinput = styled.div`
width:50%;

`
export const Search = styled.button`
margin-top: 1rem;
width: 180px;
height: 55px;
background-color:#353433;
border: none;
color:#fff;
font-size: 15px;
border-radius: 8px ;
padding: 1rem;
&:hover {
        background-color:#f8ca11;
        cursor: pointer;
    }
`
export const Inputcontainer = styled.div`
width: 52%;
height: 80%;
display: flex;
flex-wrap: wrap;
justify-content: center;
text-align: center;
font-size: 28px;
align-content: inherit;
`
export const Paragraph = styled.p`
color: #fff;
font-size: 25px;
`
export const Intemtext = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 1rem;
`
export const Bookparagraph = styled.p`
font-size: 40px;
color: #fff;
`
export const Telephone = styled.p`
font-size: 38px;
`
export const Yellowcar = styled.img`
width: 85%;
height: 60%;
`
export const Containerseta = styled.div`
width: 120px;
display: flex;
flex-wrap: wrap;
align-self: center;
justify-content: center;
align-content: space-around;
height: 33%;
`
export const SampleNextArrow = styled.div`
top:300px;
left: 0;
z-index: 99;
::before {
    color: #f8ca11;
    left: calc(50% - 10px);
    top: calc(50% - 10px);
    position: absolute;
    font-size: 80px;

}
`
export const SamplePrevArrow = styled(SampleNextArrow)`
top:400px;

`