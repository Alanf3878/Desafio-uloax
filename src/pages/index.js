import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/header'
import Main from '../components/main'
import Footer from '../components/footer'

export const query = graphql`
query{
  alldata{
    header(where: {}) {
      btncontact
      btnsearch
      btnseta
    }
  }
}
`

export default function Index({ data }) {

  return(
    <div>
   <Header/>
   <Main/>
   <Footer/>
    </div>
  )

}