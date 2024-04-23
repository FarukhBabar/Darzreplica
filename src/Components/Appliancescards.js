
import React from 'react'
// import { Link } from 'react-router-dom'


const Appliancescards = (props) => {
  return (
   <div className='container mt-1 d-flex col-lg-2 col-md-6 col-sm-12 '>
    <div className='row  mx- xaa d-flex'>
    <div className="col card1 mx-2 mt-4 "><h5>{props.data.name}</h5>
      <p> {props.data.title.slice(0, 25)}...</p>
      <center><h5>${props.data.price}</h5></center>
    </div>
    </div>
   </div>
  )
}

export default Appliancescards