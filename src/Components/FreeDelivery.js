
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Productcard from './Productcard';
import FreeCards from "./FreeCards"
import Footer from './Footer';

const  FreeDelivery = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/data/freedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className='container mb-4'>
        <div className='row'>
          {users.map(user => <FreeCards key={user.id} user={user} />)}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default  FreeDelivery;
