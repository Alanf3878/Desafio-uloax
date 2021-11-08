import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { graphql, useStaticQuery } from 'gatsby'
import * as S from "./style"; 

export default function SimpleSlider () {
    const data = useStaticQuery(graphql`
    query {
      alldata {
        headers {
          btnsearch
          btnseta
          btnsetaright
          telephone
          titlebooknow
          textinput
          text
          imgcar {
            url
          }
        }
      }
    }
  `);

  const {
    btnseta,
    btnsetaright,
    btnsearch,
    titlebooknow,
    telephone,
    text,
    textinput,
    imgcar
  } = data.alldata.headers[0];



    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
<<<<<<< HEAD
      slidesToScroll: 1
=======
      slidesToScroll: 1,
<<<<<<< HEAD
      nextArrow: <S.SampleNextArrow />,
      prevArrow: <S.SamplePrevArrow />
      
=======
      nextArrow: <S.Btnseta />,
      prevArrow: <S.Btnseta />
>>>>>>> 220e53f137f0924283a504304eb0f98b47c86061
>>>>>>> 72b6782b5fef3f286fe4dd289168040039cc7a20
    };
    

    return (
      <div style={{overflowX:"hidden"}}>
        <Slider {...settings}>
<<<<<<< HEAD
          <div>
          <S.Containerslide id ="home">
=======
          <div id="home">
          <S.Containerslide id ="home"> 
<<<<<<< HEAD
       <S.Containerseta>
          <S.Btnseta>{btnseta}</S.Btnseta>
          <S.Btnseta>{btnsetaright}</S.Btnseta>
        </S.Containerseta>
=======
       {/* <S.Containerseta>
          <S.Btnseta>{tbtnseta}</S.Btnseta>
          <S.Btnseta>{btnsetarigh}</S.Btnseta>
        </S.Containerseta> */}
>>>>>>> 220e53f137f0924283a504304eb0f98b47c86061
>>>>>>> 72b6782b5fef3f286fe4dd289168040039cc7a20
        <S.Boxcar>
         <S.Boxyellow>
             <S.Bookparagraph>{titlebooknow}</S.Bookparagraph>        
                  <S.Telephone>{telephone}</S.Telephone>
           </S.Boxyellow>
          <S.Yellowcar src={imgcar.url} />
        </S.Boxcar>
       <S.Inputcontainer>
         <S.Paragraph>{text}</S.Paragraph>
         <S.Formcontainer>
      <S.Inputbox> 
            <S.Intemtext>
               <p>{textinput}</p>
             </S.Intemtext> 
              <S.Iteminput type="text" placeholder="PICKUP" />
              <S.Iteminput type="text" placeholder="DROP" />
              <S.Iteminput type="text" placeholder="WHEN" />
              <S.Search>{btnsearch}</S.Search>
            </S.Inputbox>
          </S.Formcontainer>
        </S.Inputcontainer>
      </S.Containerslide>        
          </div>
          <div>
          <S.Containerslide id ="home">
        <S.Boxcar>
         <S.Boxyellow>
             <S.Bookparagraph>{titlebooknow}</S.Bookparagraph>        
                  <S.Telephone>{telephone}</S.Telephone>
           </S.Boxyellow>
          <S.Yellowcar src={imgcar.url} />
        </S.Boxcar>
       <S.Inputcontainer>
         <S.Paragraph>{text}</S.Paragraph>
         <S.Formcontainer>
      <S.Inputbox> 
            <S.Intemtext>
               <p>{textinput}</p>
             </S.Intemtext> 
              <S.Iteminput type="text" placeholder="PICKUP" />
              <S.Iteminput type="text" placeholder="DROP" />
              <S.Iteminput type="text" placeholder="WHEN" />
              <S.Search>{btnsearch}</S.Search>
            </S.Inputbox>
          </S.Formcontainer>
        </S.Inputcontainer>
      </S.Containerslide>        
          </div>

          

        </Slider>
      </div>
    );
  }