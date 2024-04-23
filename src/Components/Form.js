import React, {  useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const From = () => {
  const [Image , setImage]=useState(null)
  const [name , setname]=useState()
  const [title , settitle] =useState()
  const [price , setprice] = useState()
  const [ImageError , setImageError]=useState()
  const [nameError, setNameError] = useState(false);
    const [titleError, settitlteError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const nevigate = useNavigate();
    
    const handlesubmit = async(e)=>{

      e.preventDefault();

      let formdata = new FormData()

      formdata.append('name', name)

      formdata.append('title', title)

      formdata.append('price', price)

      formdata.append('image', Image)

      if(!name || !title || !price){

      if (!name) setNameError(true);

      if (!title) settitlteError(true);

      if (!price) setPriceError(true);

      if(!Image) setImageError(true)
      
      return;
    }
    try {
      let result = await fetch("http://localhost:8080/api/v1/auth/electronics" , {
        method: "post",
        body :formdata
      
      })
      result = await result.json();
      if(result){
        nevigate("/product")
        alert("Product added sucessfully")
        }
        else{
          alert("Error in connection")
        }
    } catch (error) {
      console.log("ERROR IN DB")
    }

    }
  return (
    <div>

      <marquee  behavior direction="right" scrollamount={10} className="mininav mt-1"><h3 className='text-white'>Welcome To Seller Page</h3></marquee>
      <Link to="/list" className="btn btn-success mss" >Product-list</Link>
      <form className='marr '>
  <div className="mb-3 maa ">
    <label  className="form-label mt-2">ITem Name</label>
    <input type="text" className={`form-control ${nameError ? 'is-invalid' : ''}`}  name='name' value={name} onChange={(e)=>setname(e.target.value)}  placeholder='Enter your Item name' />
    {nameError && <div className="invalid-feedback">Please enter your name</div>}
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3 maa ">
    <label  className="form-label">Title</label>
    <input type="text" className={`form-control form-control-lg ${titleError ? 'is-invalid' : ''}`}  name='title' value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter your Item title' />
    {titleError && <div className="invalid-feedback">Please enter your title</div>}
  </div>
  <div className="mb-3 maa ">
    <label  className="form-label">Price</label>
    <input type="text" className={`form-control form-control-lg ${priceError ? 'is-invalid' : ''}`} name='price' value={price} onChange={(e)=>setprice(e.target.value)} placeholder='Enter your Item Price' />
    {priceError && <div className="invalid-feedback">Please enter your price</div>}
  </div>
  <div className="mb-3 maa ">
    <label  className="form-label">Image</label>
    <input type="file" className={`form-control form-control-lg ${ImageError ? 'is-invalid' : ''}`} name='Image'  onChange={(e)=>setImage(e.target.files[0])} placeholder='Enter your Item title' />
    {ImageError && <div className="invalid-feedback">Please enter your price</div>}
  </div>
  
  <button type="submit" className="btn btn-success mss" onClick={handlesubmit}>Add Product</button>
</form>

 <Footer/>
    </div>
  )
}

export default From