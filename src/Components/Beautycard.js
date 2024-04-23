import React from 'react'
import { Link } from 'react-router-dom'


const Beautycard = (props) => {
  return (
   <div className='container mt-1 d-flex col-lg-3 col-md-6 col-sm-12 '>
    <div className='row medi1   xaa d-flex sas'>
    <div className="col card1  mt-4"><Link to={`/grocery/${props.data.id}`}><img src={props.data.image} alt className="im1-3 mt-2" /></Link>
      <p> {props.data.title.slice(0, 25)}...</p>
      <center><h5>${props.data.price}</h5></center>
    </div>
    </div>
   </div>
  )
}

export default Beautycard
