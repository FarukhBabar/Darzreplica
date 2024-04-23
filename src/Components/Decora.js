import React from 'react'
// import Card from './Card'
// import ProductsDb from "./../Data/Productsdb"
import  Decocards from './Decocards'
import Decro from '../Data/Decro'

const Decora = () => {
  return (
    <div className=''>
        <div className='container '>
        <div className='row'>
            {Decro.map((ele)=> <Decocards data={ele}/>)}
        </div>
        </div>
    </div>
  )
}

export default Decora
