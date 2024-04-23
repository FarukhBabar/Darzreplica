import React from 'react'
import FAshion from '../Components/FAshion'

const Suits = () => {
  return (
    <div>
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://laz-img-cdn.alicdn.com/imgextra/i3/O1CN012SGXcy1Rc2wMQAgZu_!!6000000002131-0-tps-1188-475.jpg" className="d-block w-100" alt="..." />
    </div>
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div> */}
  </div>
</div>


<FAshion/>

    </div>
  )
}

export default Suits