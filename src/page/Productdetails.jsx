import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Productdetails = () => {
  
    const[product,setproduct]=useState({})

    // product initial state the usestate garepaxi state change garna setproduct rakheki ho 
    // .then ke if error xaina vane resolve vako data lai product ma lanxa
    const params = useParams()
    // yo line le api bata sabai parameters linxa as key value pair ma 
    const id= params.productId
    // yesle product id linxa ra id ma store garxa
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=> setproduct(res.data))
        .catch(err=> console.log(err))
    }, [id])
// add to cart
const addtoCart=()=>{
    const carditems= JSON.parse(localStorage.getItem('cartItem'))||[]
// local stroage ma string ko form ma hunxa data hunxa teslai json.parse le object ma convert garera localstorage ma vayeko cartitem lai tanxa ra carditem ma store garxa  if local strogae ma kei data xaina vane empty array dinxa
    const productItem= {
        id:product.id,
        title:product.title,
        price:product.price,
        description:product.description,
        image:product.image,
        quantity:1
    }
    //mathy ko id, title vaneko web page ma vayeko product ho jun api bata fetch gareko
    // if the product present in the cart or not
    const existingitems= carditems.find(item=>item.id===product.id)
    // esle webpage ma dekhiyeko product ko id ra local storage ma gaisakeko item ko id check garxa 
    if(existingitems){
        toast.error("Product is already present in cart")
    }
    else{
        carditems.push(productItem) // if webpage ma vayeko product addtocart gareko xaina vane webpage ko product lai carditem vanne array ma rakhxa 
        localStorage.setItem('cartItem', JSON.stringify(carditems)) // carditem array lai string ma convert garera local storage ma rakhxa tyo pani cartitem vitra 
        toast.success(`${product.title} is added to cart`)
    }
}

    return (
    <>

    <ToastContainer theme='colored'  position='top-center'/>

<div className="container">
    <div className="d-flex row justify-content-between my-3">
        <div className="col-md-3">
            <img src={product.image} alt={product.tittle} width={300} />
        </div>
        <div className="col-md-7">
            <h2> {product.tittle} </h2>
            <h2> {product.price} </h2>
            <p className="fw-bold">Description</p>
            <p> {product.description} </p>
            <p className='text-info text-uppercase'> <strong> Category:</strong>{product.category} </p>
            <Link to='/cart'><button className='btn btn-primary text-white' onClick={addtoCart}>Add To Cart</button>
        </Link>
        </div>

    </div>
</div>
        
    </>
  )
}

export default Productdetails