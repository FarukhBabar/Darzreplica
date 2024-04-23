import React from 'react'
import FreeDelivery from '../Components/FreeDelivery'

const Delivery = () => {
  return (
    <div>
        <div><img src={'/Images/freedel.jpg'}  alt='' className='w-100'/></div>
        <div className='mt-3'><img src={'/Images/freedelbn.png'} alt='' className='w-100' /> </div>
        <FreeDelivery/>
    </div>
  )
}

export default Delivery