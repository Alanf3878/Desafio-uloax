import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Card from '../components/card'
import Dowload from '../components/dowload'
import Footer from '../components/footer'
import "../components/global/global.css"

export default function Index() {

  return(
    <div>
   <Header/>
   <Card/>
   <Main/>
   <Dowload/>
   <Footer/>
    </div>
  )

}