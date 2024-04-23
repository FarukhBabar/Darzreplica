
import React from 'react';
import { Link } from 'react-router-dom';


const Productcard = ({ user }) => {

  return (
    <>
    <div className='container mt-1 d-flex col-lg-2 col-md-6 col-sm-12'>
      <div className='row mx-xaa d-flex'>
        <div className="col card1 mx-2 mt-4 ">
          <h5>
            <Link to={`/product/${user._id}`} className="btn ">
           

              {user.image && (
                <img 
                  src={`http://localhost:8080/${user.image}`} 
                  alt={user.name} 
                  className='img-fluid' 
                  style={{ height: '150px', width: '200px' }}
                />
              )}
            </Link>
          </h5>
          <h5>{user.name}</h5>
          <p>{user.title.slice(0, 25)}...</p>
          <center><div className='d-flex'><h5>${user.price}</h5>  <small className="text-danger">(36%off)</small> </div></center>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Productcard;
