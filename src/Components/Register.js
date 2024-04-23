import React, { useState } from 'react'
import "../Components/full.css"
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Register = () => {
    const[name , setName]=useState()
    const[email , setEmail]=useState()
    const[password , setPassword]=useState()
    const[repeatpassword , setRepeatpass]=useState()
    const navigate = useNavigate()

    const register = async (e)=>{
        e.preventDefault() 
        let result = await fetch("http://localhost:8080/api/v1/auth/register",{
            method:'post',
            body :JSON.stringify({name , email , password , repeatpassword}),
            headers:{
                'Content-type':'application/json'
            }
        })
        result=await result.json()
         if(result){
             alert("Account created sucessfully")
            navigate('/login')
         }

    }
  return (
    <div>
       <section className="h-100 bg-image" style={{backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")'}}>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card mt-2" style={{borderRadius: 15}}>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                  <input type="text" name='name' onChange={(e)=>setName(e.target.value)} value={name} className="form-control form-control-md" />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                  <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}  value={email} className="form-control form-control-md" />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4cg">Password</label>
                  <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} value={password} className="form-control form-control-md" />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={register}>Register</button>
                </div>
                <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <Footer/>
</section>
    </div>
  )
}

export default Register