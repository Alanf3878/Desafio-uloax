import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Main from '../components/main'
import Card from '../components/card'
import Dowload from '../components/dowload'
import Footer from '../components/footer'


export default function Index() {

  return(
    <div>
   <Header/>
   <Main/>
   <Card/>
   <Dowload/>
   <Footer/>
    </div>
  )

}