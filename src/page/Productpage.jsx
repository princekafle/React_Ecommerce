import React, { useState, useEffect } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Productpage = () => {
  const [products,setProduct]=useState([])

  //  This state variable "products" will hold the array of products fetched from the API.
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)

    //  Sends a GET request to the Fake Store API to fetch products data.
    .then(res=>(
     setProduct(res.data)))
     // Updates the products state with the data received from the API response.
     .catch(err=> console.log(err))
  },[])
  return (
    <>
    <div className="container my-5">
<div className="row row-cols-1 row-cols-md-4 g-4">
{products.map((item,i)=>
  <Card data = {item} key = {i}/>
)}
{/* pratyak indivisual product lai item le access garxa ra i chai unique key ko lagi */}

</div>
</div>
   
   
    </>
  )
}

export default Productpage