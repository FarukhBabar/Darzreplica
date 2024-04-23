import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useCart } from './CartContext';

const Navbar = () => {
  const userlogin = localStorage.getItem("user");

const navigate = useNavigate();
const { cartItems } = useCart();
const [cartCount, setCartCount] = useState(0);

useEffect(() => {
   
  setCartCount(cartItems.length);
}, [cartItems]);


  const Logout=()=>{
    localStorage.clear("user")
    alert("LogOut sucessfully")
    navigate("/login")
  }
  return (
    <>
   <nav className="navbar  navbar-expand-lg navbar-dark  mininav2">
  <div className="container-fluid">
    <div className="collapse navbar-collapse " id="navbarTogglerDemo02" >
     <marquee>
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <Link className="nav-link text-white m-nav " to="/form">Become a saller </Link>
        <li className="nav-item">
          <Link className="nav-link text-white m-nav" to="/form1">Daraz Affiliate Program</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white m-nav" href="#"> Help &amp; Support</a>
        </li>
      </ul>
     </marquee>
    </div>
  </div>
</nav>

      <nav className="navbar navbar-expand-lg navbar-dark  mininav  sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand ms-4" href="#"><img className='pic' src={"/Images/logo.png "} alt=''/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav  mb-2 mb-lg-0 ms-2">
 
  <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Categories
    </a>
    <ul className="dropdown-menu drop" aria-labelledby="navbarDropdown">
    <Link to="/food" className='text-decoration-none '><li className='te'  >Groceries</li></Link>
      <Link to="/food" className='text-decoration-none'><li className='te'  >Groceries</li></Link>
    <Link to="/grocery  " className='text-decoration-none '><li className='te'>Health & Beauty</li></Link>
      <Link to="/fashion" className='text-decoration-none '><li className='te'>Men's Fashion</li></Link>
     <Link to="" className='text-decoration-none '><li className='te'>Mother & Baby</li></Link>
    <Link to="/decoration" className='text-decoration-none '><li className='te'>Home & Lifestyle</li></Link>
    <Link to="/product" className='text-decoration-none '><li className='te'>Electronic Devices</li></Link>
    <Link to="/freedel" className='text-decoration-none '><li className='te'>Electronic Accessories</li></Link>
    <Link to="" className='text-decoration-none '><li className='te'>TV & Home Appliances </li></Link>
    <Link to="" className='text-decoration-none '><li className='te'>Sports & Outdoor</li></Link>
     <Link to="" className='text-decoration-none '><li className='te'>Watches & Bags</li></Link>
    <Link to="" className='text-decoration-none '><li className='te'>Automotive & Motorbike</li></Link>
    </ul>
  </li>
 
</ul>

      <form class="d-flex">
         <div className="serch d-flex ">
  <input className="form-control snav  mt-2 text-center " type="search width" placeholder="Search in Daraz" aria-label="Search"  />  

  </div>
  </form>
  
  {userlogin?(

        <Link to=""  onClick={Logout} className=" snavl mt-3 ms-5 text-decoration-none text-white"><i className="bi bi-person" />Logout</Link>
       
     ):(
    
      <Link to="/login" className=" snavl mt-3 ms-5 text-decoration-none text-white"><i className="bi bi-person" /> Login</Link>
     )
     }
  <Link to="/register" className="mt-3 me-4 text-decoration-none text-white">&nbsp;&nbsp;|&nbsp;&nbsp;<i className="bi bi-person" /> Sign-up</Link>
  <div className="cart scart mt-3 me-2 text-decoration-none text-white position-relative">
        <Link to="/addtocart" className="text-decoration-none text-white">
          <i className="bi bi-cart" /> Cart ({cartCount})
        </Link>
      </div>
      </div>
</div>
       
   </nav>
</>
  )
}

export default Navbar





