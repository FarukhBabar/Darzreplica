
import React, { useState , useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
const AppliancesEl = () => {
  const [user  , setuser] = useState([])
  // const getitemlist = async()=>{
  //   let result = await fetch("http://localhost:8004/electronics")
  //     result = await result.json()
  //     setuser(result)
  //     console.log(result)

      
      
    
  // }
  // console.log("usres", user)
  // if(result){
  //   getitemlist()
  // }

  useEffect(()=>{
    axios.get("http://localhost:8004/user")
    .then(users => setuser(users.data)) 
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
         <div className='container'>
        <div className='row'>
            {user.map((ele)=> <Cards data={ele}/>)}
        </div>
        </div>
    </div>
  )
}

export default AppliancesEl