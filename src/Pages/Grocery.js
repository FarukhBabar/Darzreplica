import React from 'react'
import "../Components/full.css"
import Beautyma from '../Components/Beautyma'
import Footer from '../Components/Footer'
const Grocery = () => {
  return (
    <div className=''>
      <div className=" container  d-flex pt-2 mdd ">
    <div className='row'>
  <div className="col pic mx-2 "><a href><img src={"/Images/beauty1.png"} alt className="imm" /></a>
    <p className="text-dark tart">Flash Sale</p> 
  </div>
  <div className=" col pic1 mx-2 "><a href><img src={"/Images/beauty2.png"} alt className="i" /></a>
   <p className="text-dark tart">Skin Care</p> 
  </div>
  <div className=" col pic2 mx-2"><a href><img src={"/Images/beauty3.png"} alt className="i" /></a>
   <p className="text-dark tart">Make Up</p> 
  </div>
  <div className=" col pic3 mx-2"><a href=""><img src={"/Images/beauty4.png"} alt className="imm" /></a>
    <p className="text-dark tart1">Local Beauty</p> 
  </div>
  <div className=" col pic4 mx-2"><a href><img src={"/Images/beauty6.png"} alt className="im" /></a>
     <p className="text-dark tart1">Men's Care</p>     
  </div>
  <div className=" col pic5 mx-2"><a href=""><img src={"/Images/beauty5.png"} alt className="im" /></a>
    <p className="text-dark tart">Hair Care</p> 
  </div>
  <div className="col  m121 pic6 mx-2"><a href><img src={"/Images/beauty7.png"} alt className="im" /></a>
   <p className="text-dark tart1">Beauty Tools</p> 
  </div>
 
  </div>
</div>
{/* <div className='col-sm-12 col-md-6 col-lg-3'><img src={'/Images/banner.png'} alt='' className='banner' /></div> */}
<div className='container'>
      <div className='row'>
       <center> <div className='col-sm-12 col-md-12 col-lg-12 '>
          <img src={'/Images/banner.png'} alt='' className='banner img-fluid' />
        </div></center>
      </div>
    </div>
<Beautyma/>
<Footer/>
    </div>
  )
}

export default Grocery