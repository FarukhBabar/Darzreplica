import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddaplForm = () => {
  const [name , setname]=useState()
  const [title , settitle] =useState()
  const [price , setprice] = useState()
  const [nameError, setNameError] = useState(false);
    const [titleError, settitlteError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const nevigate = useNavigate();
    const handlesubmit = async(e)=>{
      e.preventDefault();
      if(!name || !title || !price){
      if (!name) setNameError(true);
      if (!title) settitlteError(true);
      if (!price) setPriceError(true);
      return;
    }
    try {
      let result = await fetch("http://localhost:8004/electronics" , {
        method: "post",
        body :JSON.stringify({name , title , price}),
        headers:{
          'Content-type' : 'application/json'
        }
      })
      result = await result.json();
      if(result){
        nevigate("/from")
        alert("Product added sucessfully")
        }
        else{
          alert("Error in connection")
        }
    } catch (error) {
      console.log(error)
    }

    }
  return (
    <div>
      <form>
  <div className="mb-3">
    <label  className="form-label">Item Name</label>
    <input type="text" className={`form-control ${nameError ? 'is-invalid' : ''}`}  name='name' value={name} onChange={(e)=>setname(e.target.value)}  placeholder='Enter your Item name' />
    {nameError && <div className="invalid-feedback">Please enter your name</div>}
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className={`form-control form-control-lg ${titleError ? 'is-invalid' : ''}`}  name='title' value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter your Item title' />
    {titleError && <div className="invalid-feedback">Please enter your title</div>}
  </div>
  <div className="mb-3">
    <label  className="form-label">Price</label>
    <input type="text" className={`form-control form-control-lg ${priceError ? 'is-invalid' : ''}`} name='price' value={price} onChange={(e)=>setprice(e.target.value)} placeholder='Enter your Item title' />
    {priceError && <div className="invalid-feedback">Please enter your price</div>}
  </div>
  <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>


    </div>
  )
}

export default AddaplForm
