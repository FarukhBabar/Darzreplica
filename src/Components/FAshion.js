import React from 'react'
// import Card from './Card'
// import ProductsDb from "./../Data/Productsdb"
import Fashion from '../Data/Fashion'
import Fashioncard from "./Fashioncard"
import Footer from './Footer'

const FAshion = () => {
  return (
    <div className=''>
        
        <div className='container '>
        <div className='row'>
            {Fashion.map((ele)=> <Fashioncard data={ele}/>)}
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FAshion
