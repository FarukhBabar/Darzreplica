import React from 'react'
import Card from './Card'
import Food from '../Data/Food'
import Foodcard from './Foodcard'

const Products = () => {
  
  return (
    <div>
        
        <div className='container'>
        <div className='row'>
            {Food.map((ele)=> <Foodcard data={ele}/>)}
        </div>
        </div>
    </div>
  )
}

export default Products