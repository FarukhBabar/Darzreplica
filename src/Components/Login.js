import React, { useState , useEffect } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import "../Components/full.css"
import Footer from './Footer'

const Login = () => {
  const[email , setemail] = useState()
  const [ password  , setpassword]  = useState()
  const nevigate=useNavigate()
  
  useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
          const userData = JSON.parse(user);
          if (userData.role === 'user') {
            nevigate('/');
          }
        }
      }, [nevigate]);
    // const role = user ? JSON.parse(user).role : null
  const registeruser = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await result.json();
      
      if (result.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        if (data.role === "admin") {
          alert("Account login Successfully");
          nevigate("/form"); // Navigate to the form page
        } else {
          alert("You are login as a user")
          nevigate('/');
        }
      } else {
        alert(data.Message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  


  return (
    <div className='mt-3 mb-3'>
      <div id="main-wrapper" className="container mt-2 ">
  <div className="row justify-content-center ">
    <div className="col-xl-10 ">
      <div className="card border-0 box">
        <div className="card-body p-0">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="p-5">
                <div className="mb-5">
                  <h3 className="h4 font-weight-bold text-theme">Login </h3>
                </div>
                <h6 className="h5 mb-0">Welcome back!</h6>
                <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" id="exampleInputEmail1" />
                  </div>
                  <div className="form-group mb-5">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" name='password' value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
                  </div>
                  <div className='d-flex'>
                  <button type="submit" onClick={registeruser} className="btn btn-theme">Login</button>
      <p className="text-muted text-center mt-3 mb-0 ms-5">Don't have an account? <Link to="/register" className="text-primary ml-1">register</Link></p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-inline-block">
              <div className="account-block rounded-right">
                <div className="overlay rounded-right" />
                <div className="account-testimonial">
                  <h4 className="text-white mb-4">This  beautiful theme yours!</h4>
                  <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
                  <p>- admin Panel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end card-body */}
      </div>
      {/* end card */}
      {/* end row */}
    </div>
    {/* end col */}
  </div>
  {/* Row */}
</div>
<Footer/>
    </div>
  )
}

export default Login

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import "../Components/full.css";
// import Footer from './Footer';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.role === 'user') {
//         navigate('/');
//       }
//     }
//   }, [navigate]);

//   const loginUser = async (e) => {
//     e.preventDefault();
//     try {
//       let result = await fetch('http://localhost:8080/api/v1/auth/login', {
//         method: "POST",
//         body: JSON.stringify({ email, password }),
//         headers: {
//           'Content-type': 'application/json'
//         }
//       });
//       const data = await result.json();
      
//       if (result.ok) {
//         localStorage.setItem('user', JSON.stringify(data));
//         if (data.role === "admin") {
//           alert("Account login Successfully");
//           navigate("/form"); // Navigate to the form page
//         } else {
//           alert("You are not able to access this Page");
//           navigate('/');
//         }
//       } else {
//         alert(data.Message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className='mt-3 mb-3'>
//      <div className='mt-3 mb-3'>
//       <div id="main-wrapper" className="container mt-2 ">
//   <div className="row justify-content-center ">
//     <div className="col-xl-10 ">
//       <div className="card border-0 box">
//         <div className="card-body p-0">
//           <div className="row no-gutters">
//             <div className="col-lg-6">
//               <div className="p-5">
//                 <div className="mb-5">
//                   <h3 className="h4 font-weight-bold text-theme">Login </h3>
//                 </div>
//                 <h6 className="h5 mb-0">Welcome back!</h6>
//                 <p className="text-muted mt-2 mb-5">Enter your email address and password to access admin panel.</p>
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" />
//                   </div>
//                   <div className="form-group mb-5">
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
//                   <a href="#l" className="forgot-link float-right text-primary">Forgot password?</a>
//                   </div>
//                   <div className='d-flex'>
//                   <button type="submit" onClick={loginUser} className="btn btn-theme">Login</button>
//       <p className="text-muted text-center mt-3 mb-0 ms-5">Don't have an account? <Link to="/register" className="text-primary ml-1">register</Link></p>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="col-lg-6 d-none d-lg-inline-block">
//               <div className="account-block rounded-right">
//                 <div className="overlay rounded-right" />
//                 <div className="account-testimonial">
//                   <h4 className="text-white mb-4">This  beautiful theme yours!</h4>
//                   <p className="lead text-white">"Best investment i made for a long time. Can only recommend it for other users."</p>
//                   <p>- admin Panel</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* end card-body */}
//       </div>
//       {/* end card */}
//       {/* end row */}
//     </div>
//     {/* end col */}
//   </div>
//   {/* Row */}
// </div>
// <Footer/>
//     </div>
//     </div>
//   );
// };

// export default Login;
