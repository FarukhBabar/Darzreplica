// import React, { useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import ProductsDb from '.././Data/Productsdb'
// import "../Components/full.css"



// const Singlepage = () => {
//     const [qty , setqty] = useState(0)
//      let params= useParams()
//     let fdata = ProductsDb.find(x => x.id == params.id)
//     const incQty=()=>{
//         setqty(qty+1)
//     }
//     const decQty=()=>{
//         if(qty>=2){
//             setqty(qty-1)
//         }
//     }
//     const nevigate= useNavigate()
//     const goback=()=>{
//         nevigate("/")
//     }
//     const buynow = ()=>{
//         nevigate("/login")
//     }
    
//     return (
//         <div className=''><div className="container ">

//             <div className="card  mainn ">
//             <div onClick={goback} className='btn bt2  mb-2 mt-2 '>Go to product Page</div>
//                 <div className="card-body">
//                     <h3 className="card-title">{fdata.title}</h3>
//                     <h6 className="card-subtitle">{fdata.category}</h6>
//                     <div className="row">
//                         <div className="col-lg-5 col-md-5 col-sm-6">
//                             <div className="white-box text-center mt-3"><img src={fdata.image} height={400} width={400} className="img-responsive rounded" /></div>
//                         </div>
//                         <div className="col-lg-7 col-md-7 col-sm-6">
//                             <h4 className="box-title mt-5">Product description</h4>
//                             <p>{fdata.description}</p>
//                             <h2 className="mt-5">
//                                 ${fdata.price}<small className="text-danger">(36%off)</small>
//                             </h2>
                           
//                             <br/><br/>
//                                  <div className='ms-5 d-flex'>
//                                 <div className='mt-1'> <h5>Quantity:</h5></div>   
//                                     <button onClick={decQty} className='btn btn-dark in btn-md ms-2 h-25'>-</button>
//                                        <h4 className='ms-2'>{qty}</h4> 
//                                     <button onClick={incQty} className='btn btn-dark in btn-md ms-2 h-25'>+</button>
//                                     <br/><br/>
//                                 </div>
//                                     <h3 className='text-danger'>Total Ammount:${fdata.price*qty}</h3>
//                                 <button className="btn btn1 btn-rounded mr-1 buy" data-toggle="tooltip" title data-original-title="Add to cart">Add To Cart</button>
                           
//                             <button className="btn bt2 btn-rounded ms-3 buy" onClick={buynow}>Buy Now</button>
//                             {/* <h3 className="box-title mt-5">Key Highlights</h3>
//                             <ul className="list-unstyled">
//                                 <li><i className="fa fa-check text-success" />Sturdy structure</li>
//                                 <li><i className="fa fa-check text-success" />Designed to foster easy portability</li>
//                                 <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
//                             </ul> */}
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </div>
//     )
// }

// export default Singlepage




import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductsDb from '.././Data/Productsdb'
import "../Components/full.css"
import { useCart } from './CartContext';


const Singlepage = () => {
    const [qty , setqty] = useState(1)
    const { addToCart } = useCart();
     let params= useParams()
    let fdata = ProductsDb.find(x => x.id == params.id)
    const incQty=()=>{
        setqty(qty+1)
    }
    const decQty=()=>{
        if(qty>=2){
            setqty(qty-1)
        }
    }
    const nevigate= useNavigate()
    const goback=()=>{
        nevigate("/")
    }
    const buynow = ()=>{
        nevigate("/login")
    }
    const handleAddToCart = () => {
          addToCart({ ...fdata, qty });
          setqty(1);
        };
    return (
        <div className=''><div className="container ">

            <div className="card  mainn ">
            <div onClick={goback} className='btn bt2  mb-2 mt-2 '>Go to product Page</div>
                <div className="card-body">
                    <h3 className="card-title">{fdata.title}</h3>
                    <h6 className="card-subtitle">{fdata.category}</h6>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center mt-3"><img src={fdata.image} height={400} width={400} className="img-responsive rounded asdf" /></div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h4 className="box-title mt-5">Product description</h4>
                            <p>{fdata.description}</p>
                            <h2 className="mt-5">
                                ${fdata.price}<small className="text-danger">(36%off)</small>
                            </h2>
                           
                            <br/><br/>
                                 <div className='ms-5 d-flex'>
                                <div className='mt-1'> <h5>Quantity:</h5></div>   
                                    <button onClick={decQty} className='btn btn-dark in btn-md ms-2 h-25'>-</button>
                                       <h4 className='ms-2'>{qty}</h4> 
                                    <button onClick={incQty} className='btn btn-dark in btn-md ms-2 h-25'>+</button>
                                    <br/><br/>
                                </div>
                                    <h3 className='text-danger'>Total Ammount:${fdata.price*qty}</h3>
                                    {/* <button onClick={handleAddToCart}>Add To Cart</button> */}
                                    <button className="btn btn1 btn-rounded mr-1 buy" onClick={handleAddToCart} data-toggle="tooltip" title data-original-title="Add to cart">Add To Cart</button>
                           
                            <button className="btn bt2 btn-rounded ms-3 buye" onClick={buynow}>Buy Now</button>
                            {/* <h3 className="box-title mt-5">Key Highlights</h3>
                            <ul className="list-unstyled">
                                <li><i className="fa fa-check text-success" />Sturdy structure</li>
                                <li><i className="fa fa-check text-success" />Designed to foster easy portability</li>
                                <li><i className="fa fa-check text-success" />Perfect furniture to flaunt your wonderful collectibles</li>
                            </ul> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </div>
    )
}

export default Singlepage




