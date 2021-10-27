import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Header = () => {

    const data = useStaticQuery(graphql`
    query {
        alldata {
            headers {
                btncontact
                btnsearch
                btntaxi
                btnseta
                imgcar {
                  url
                }
                telephone
                titlebooknow
                textinput
                text
                logo {
                  url
                }
            }
        }
    }`)
    const{ 
       btncontact,
       btnseta,
       btnsearch,
       btntaxi,
       logo
         } = data.alldata.headers[0]
    return (
        <div>
    <button>{btncontact}</button>
    <button>{btnsearch}</button>
    <button>{btntaxi}</button>
    <button>{ btnseta}</button>
    <img src={logo.url}/>  
        </div>
     );
}
export default Header;