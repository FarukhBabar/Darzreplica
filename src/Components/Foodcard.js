import React from 'react'
import { Link } from 'react-router-dom'
import "./full.css"

const Foodcard = (props) => {
  return (
   <div className='container foodh mt-1 d-flex col-lg-2 col-md-6 col-sm-6 '>
    <div className='row medi  mx- xaa d-flex '>
    <div className="col card1 mx-2 mt-4  "><Link to={`/food/${props.data.id}`}><img src={props.data.image} alt className="im1-1 mt-2" /></Link>
      <p> {props.data.title.slice(0, 20)}..</p>
      <center><h5>${props.data.price}</h5></center>
    </div>
    </div>
   </div>
  )
}

export default Foodcard