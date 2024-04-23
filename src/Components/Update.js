

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    let formdata = new FormData()
    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/auth/singale/${params.id}`);
                const result = await response.json();
                setName(result.name);
                setTitle(result.title);
                setPrice(result.price);
                setImage(result.image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [params.id]);
   
   
            const updateuser = async (e)=>{
                e.preventDefault()
               
                formdata.append('name' , name)
                formdata.append('price' , price)
                formdata.append('title' , title)
                formdata.append('image' , image)
                try {
                    let result = await fetch(`http://localhost:8080/api/v1/auth/singale/${params.id}` , {
        method: "put",
        body :formdata
      
      })
      result = await result.json();
      if(result){
       
        alert("Product added sucessfully")
        }
        else{
          alert("Error in connection")
        }
                    
                } catch (error) {
                    
                }

            }    

    return (
        <div>
            <form className='marr'>
                <div className="mb-3 maa">
                    <label className="form-label mt-2">Item Name</label>
                    <input type="text" className={`form-control form-control-lg `}  name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Item name' />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Title</label>
                    <input type="text" className={`form-control form-control-lg `}  name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter your Item title' />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Price</label>
                    <input type="text" className={`form-control form-control-lg `}  name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Enter your Item Price' />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Image</label>
                    <input type="text" className={`form-control form-control-lg `} name='Image' value={image} onChange={(e) => setImage(e.target.value)} placeholder='Enter your Item image path or name' />
                    <input type="file" className={`form-control form-control-lg `} name='Image'  onChange={(e)=>setImage(e.target.files[0])} placeholder='Enter your Item title' />
                </div>
                <button type="submit" onClick={updateuser} className="btn btn-success mss">Update Product</button>
            </form>
        </div>
    );
}

export default Update;


