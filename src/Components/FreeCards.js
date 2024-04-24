
import React from 'react';
import { Link } from 'react-router-dom';


const  FreeCards = ({ user }) => {

  return (
    <>
    <div className='container mt-1 d-flex col-lg-2 col-md-6 col-sm-12'>
      <div className='row mx-xaa d-flex'>
        <div className="col card11 mx-2 mt-3 ">
          <h5>
            <Link to={`/freedel/${user._id}`} className="btn ">
            {/* <Link to={`/product/${user._id}`} className="btn btn-primary"> */}

              {user.image && (
                <img 
                  src={`http://localhost:8080/${user.image}`} 
                  alt={user.name} 
                  className='img-fluid' 
                  style={{ height: '150px', width: '150px' }}
                />
              )}
            </Link>
          </h5>
          <h5>{user.name}</h5>
          <p>{user.title.slice(0, 15)}...</p>
          <center><h5>${user.price}</h5></center>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default  FreeCards;
