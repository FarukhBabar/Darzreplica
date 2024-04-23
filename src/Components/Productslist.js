
// import React, { useState , useEffect } from 'react'
// import axios from 'axios'
// // import Cards from './Cards'
// import Productcard from './Productcard'
// const Productslist = () => {
//   const [user  , setuser] = useState([])
//   useEffect(()=>{
//     axios.get("http://localhost:8080/user")
//     .then(users => setuser(users.data))
//     .catch(err=>console.log(err))
//   },[])
//   return (
//     <div>
//          <div className='container'>
//         <div className='row'>
//             {user.map((ele)=> <Productcard data={ele}/>)}
//         </div>
//         </div>
        
//     </div>
//   )
// }

// export default Productslist


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Productcard from './Productcard';
import Footer from './Footer';

const Productslist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/data/user")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <div className='container mb-4'>
        <div className='row'>
          {users.map(user => <Productcard key={user.id} user={user} />)}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Productslist;
