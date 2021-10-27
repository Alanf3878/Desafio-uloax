import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'


export default function Index() {

  return(
    <div>
   <Header/>
   <Main/>
   <Footer/>
    </div>
  )

}