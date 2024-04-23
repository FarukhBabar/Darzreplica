import React from 'react'
import Products from '../Components/Products'
import { Link } from 'react-router-dom'
import "../Components/full.css"
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className="">
      <div className=' '>
      
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://icms-image.slatic.net/images/ims-web/edd1c084-fccb-4a47-87e8-08334a469ba9.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/71207337-7f57-467c-bcd5-46d2987300b6.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://icms-image.slatic.net/images/ims-web/3cb7ecbd-970c-4a18-ad98-5492572f0fa8.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
<div className=' container smallbar mt-1'>
   <div className=' row d-flex'>
    <div className='col-lg-2 col-md-6 col-sm-12'><img src={"/Images/s.m"}/>Safe Payments</div>
    <div className='col-lg-2 col-md-6 col-sm-12'><img src={"/Images/ss.png"}/>Free & Easy Returns</div>
    <div className='col-lg-2 col-md-6 col-sm-12'><img src={"/Images/b.e.png"}/>Price Guaranteed</div>
    <div className='col-lg-2 col-md-6 col-sm-12'><img src={"/Images/d.v.png"}/>World Delivery</div>
    <div className='col-lg-2 col-md-6 col-sm-12'><img src={"/Images/t.c"}/>Authentic Products</div>
    <div className='col-lg-2 col-md-6 col-sm-12'><img src={"/Images/d.cv.png"}/>Daraz Verified</div>
   </div>
</div>
<div className=" container  d-flex mt-2 mdd ">
    <div className='row'>
  <div className="col  pic mx-2 "><Link to="/food" ><a href><img src="https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png" alt className="im" /></a>
     <p className="text-dark tmart">Mart</p> </Link>
  </div>
  <div className=" col pic1 mx-2 "><Link to="/fashion"><a href><img src="https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png" alt className="im" /></a>
     <p className="text-dark tmart1">Fashion</p> </Link>
  </div>
  <div className=" col pic2 mx-2"><Link to="/grocery"><a href><img src="https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png" alt className="im" /></a>
     <p className="text-dark tmart2">Beauty</p> </Link>
  </div>
  <div className=" col pic3 mx-2"><Link to="/decoration" ><a href=""><img src="https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png" alt className="im" /></a>
     <p className="text-dark">Home &amp; Decor</p></Link>
  </div>
  <div className=" col pic4 mx-2"><Link to="/product"><a href><img src="https://icms-image.slatic.net/images/ims-web/9f2cf12a-3899-423e-9273-c752acafa387.png" alt className="im" /></a>
    <p className="text-dark tmart3">Home Appliances</p>   </Link> 
  </div>
  <div className=" col pic5 mx-2"><Link to="/freedel"> <a href=""><img src="https://icms-image.slatic.net/images/ims-web/cc89e68e-c809-4638-a5a6-2dc7e450d2a1.png" alt className="im" /></a>
    <p className="text-dark">Free Delivery</p></Link>
  </div>
  <div className="col m121 pic6 mx-2"><a href><img src="https://icms-image.slatic.net/images/ims-web/a13edb2b-61bf-4dec-a410-f85b63d41490.png" alt className="im" /></a>
     <p className="text-dark">Everyday Low Price</p> 
  </div>
 
      </div>
    </div>
    <Products/>

    <Footer/>
    </div>
  )
}

export default Home

