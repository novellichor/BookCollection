import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    rating: "",
    price: null,
    cover: "",
  });  

  const navigate = useNavigate();
  const bookId = useParams();

  const handleChange = (e)=>{
    setBook((prev)=>({...prev, [e.target.name]: e.target.value}));
  };

  const handleClick = async (e)=>{
    e.preventDefault();
    try{
        await axios.put("http://localhost:8800/books/"+ bookId.id, book);
        navigate("/");
    }catch(err){
        console.log(err);
    }
  }

  return (
    <div className="form">
        <h1>Update Book</h1>
        <input type="text" placeholder='title' onChange={handleChange} name='title'/>
        <input type="text" placeholder='desc' onChange={handleChange} name='desc'/>
        <input type="text" placeholder='rating' onChange={handleChange} name='rating'/>
        <input type="number" placeholder='price' onChange={handleChange} name='price'/>
        <input type="text" placeholder='cover' onChange={handleChange} name='cover'/>
        <button className='formButton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update