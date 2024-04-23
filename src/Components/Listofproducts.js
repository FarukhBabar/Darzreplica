import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Listofproducts = () => {
    const [user, setUsers] = useState([]);
    

    useEffect(() => {
      axios.get("http://localhost:8080/api/v1/data/user")
        .then(response => setUsers(response.data))
        .catch(error => console.log(error));
    }, []);
    const deleteuser = async(id)=>{
        // console.log(id)
        let result= await fetch(`http://localhost:8080/api/v1/data/userid/${id}`,{
          method:"delete"
       
        })
        result= await result.json()
        
       
    
        
      }
    
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">image</th>
      {/* <th scope="col">Phone</th> */}
    </tr>
  </thead>
  {
       user.map(ele=>{
          return(
              <tbody>
                <tr>
                  
                  <td>{ele.name}</td>
                  <td>{ele.title}</td>
                  <td>{ele.price}</td>
                 
                  {/* <td> { (
                             <img src={`http://localhost:8080/${user.image ?.replace(/\\/g, '/')}`} alt="" />
                             )}</td> */}
                <td>  
                     {ele.image && (
                         <img 
                       src={`http://localhost:8080/${ele.image}`} 
                                alt={ele.name} 
                                    className='img-fluid' 
                               style={{ height: '150px', width: '200px' }}
                                     />
                          )}
                    </td>

                  <td>
                               <Link to={`/list/${ele._id}`} className='btn btn-success'>Edit</Link>
                                 <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger mt-2'>Delete</a>
                            </td>
                </tr>
             
              </tbody>
            
            )
          })
        }
 
</table>


    </div>
  )
}

export default Listofproducts