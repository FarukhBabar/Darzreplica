
import React from 'react'
import { Link } from 'react-router-dom'


const Card = (props) => {
  return (
   <div className='container  mt-1 d-flex col-lg-2 col-md-6 col-sm-6 col-xm-6 '>
    <div className='row medi mx- xaa d-flex'>
    <div className="col  card1 mx-2 mt-4 "><Link to={`/${props.data.id}`}><img src={props.data.image} alt className="im1-1 mt-2" /></Link>
      <p> {props.data.title.slice(0, 15)}...</p>
      <center><h5>${props.data.price}</h5></center>
    </div>
    </div>
   </div>
  )
}

export default Card

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Card = (props) => {
//   return (
//    <div className='container mt-1 d-flex col-lg-2 col-md-6 col-sm-12 '>
//     <div className='row  mx- xaa d-flex'>
//     <div className="col card1 mx-2 mt-4 "><Link to={`/product/${props.data.id}`}><img src={props.data.image} alt={props.data.title || ''} className="im1-1 mt-2" /></Link>
//       {props.data.title && <p> {props.data.title.slice(0, 25)}...</p>}
//       <center><h5>${props.data.price}</h5></center>
//     </div>
//     </div>
//    </div>
//   )
// }

// export default Card;