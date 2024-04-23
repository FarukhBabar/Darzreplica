import React from 'react'
import Card from './Card'
// import ProductsDb from "./../Data/Productsdb"
import ProductsDb from '../Data/Productsdb'

const Products = () => {
  
  return (
    <div>
        
        <div className='container'>
        <div className='row'>
            {ProductsDb.map((ele)=> <Card data={ele}/>)}
        </div>
        </div>
    </div>
  )
}

export default Products