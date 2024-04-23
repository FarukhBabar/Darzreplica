import React from 'react'
import Productslist from '../Components/Productslist'
import Sale from '../Components/Sale';

const Appliances = () => {
  const endTime = new Date('2024-03-18T23:59:59').getTime();
  return (
    <div>
        <div><img src={'/Images/he.png'} alt='' className='w-100' /></div>
    <div><img src={'/Images/h1.png'} alt='' className='ms- mt-4 w-100' /></div>
    <div className='container'>
      <div className='row d-flex mt-2'>
        <div className=' mt-2 col-sm-12 col-md-6 col-lg-3'>
          <img src='/Images/hp.png' className='img-fluid' alt='' />
        </div>
        <div className=' mt-2 col-sm-12 col-md-6 col-lg-3'>
          <img src='/Images/del.png' className='img-fluid' alt='' />
        </div>
        <div className='mt-2 col-sm-12 col-md-6 col-lg-3'>
          <img src='/Images/apple.png' className='img-fluid' alt='' />
        </div>
        <div className='mt-2 col-sm-12 col-md-6 col-lg-3'>
          <img src='/Images/len.png' className='img-fluid' alt='' />
        </div>
      </div>
    </div>
    <div><img src={'/Images/laptop.png'} alt='' className=' w-100' /></div>
    
    <Productslist/> 
  

    </div>
  )
}

export default Appliances