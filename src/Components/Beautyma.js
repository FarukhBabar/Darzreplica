import React from 'react'
// import Card from './Card'
// import ProductsDb from "./../Data/Productsdb"
import Beautycard from './Beautycard'
import Beauty from '../Data/Beauty'

const Beautyma = () => {
  return (
    <div className=''>
        
        <div className='container '>
        <div className='row'>
            {Beauty.map((ele)=> <Beautycard data={ele}/>)}
        </div>
        </div>
    </div>
  )
}

export default Beautyma
