


import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const Freedevsingal = () => {
    const [qty, setQty] = useState(0);
    const [product, setProduct] = useState({});
    const { addToCart } = useCart();
    let params = useParams();
    const navigate = useNavigate();

    const getSingleUser = async () => {
        try {
            const response = await fetch(`http://localhost:8080/singalepage/${params.id}`);
            const result = await response.json();
            setProduct(result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getSingleUser();
    }, []);

    const incQty = () => {
        setQty(qty + 1);
    };

    const decQty = () => {
        if (qty >= 1) {
            setQty(qty - 1);
        }
    };

    const goBack = () => {
        navigate("/");
    };

    const buyNow = () => {
        navigate("/login");
    };
    const handleAddToCart = () => {
        addToCart({ ...product, qty }); // Use fdata instead of item
        setQty(1); // Reset quantity to 1 after adding to cart
      };
    return (
        <div className="container">
            <div className="card mainn">
                <div onClick={goBack} className="btn bt2 btn-lg mb-2 mt-2">Go to product Page</div>
                <div className="card-body">
                    <h3 className="card-title">{product.name}</h3>
                    <h6 className="card-subtitle">{product.title}</h6>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-6">
                            <div className="white-box text-center mt-3">
                              { (
                             <img src={`http://localhost:8080/${product.image ?.replace(/\\/g, '/')}`} alt="" className='asdf' />
                             )}
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-6">
                            <h4 className="box-title mt-5">Product description</h4>
                            <p>{product.title}</p>
                            <h2 className="mt-5">
                                ${product.price}<small className="text-danger">(36%off)</small>
                            </h2>
                            <div className="ms-5 d-flex">
                                <div className="mt-1"><h5>Quantity:</h5></div>
                                <button onClick={decQty} className="btn btn-dark btn-md ms-2 h-25">-</button>
                                <h4 className="ms-2">{qty}</h4>
                                <button onClick={incQty} className="btn btn-dark btn-md ms-2 h-25">+</button>
                            </div>
                            <h3 className="text-danger">Total Amount: ${product.price * qty}</h3>
                            <button className="btn btn1 btn-rounded mr-1 buy" onClick={handleAddToCart} data-toggle="tooltip" title data-original-title="Add to cart">Add To Cart</button>
                            <button className="btn bt2 btn-rounded ms-3 buye" onClick={buyNow}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    );
}

export default Freedevsingal;





