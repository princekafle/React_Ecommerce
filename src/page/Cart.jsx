import React, {useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from "react-icons/fa";
import { ToastContainer,toast } from 'react-toastify';




const Cart = () => {
    
   
    const[product, setproduct]= useState([])
   
    // yaha [] use garera hamile dherai data chahinxa so use gareko single data chaiyeko vaye obj use garthyau
    useEffect(()=>{
        const cartData= JSON.parse(localStorage.getItem('cartItem'))||[];
        // [] le local storage ma data xaina vane empty array returns garxa
        setproduct(cartData)
    },[]) 

    // yo [] le ekchoti heat garxa 

// increaseQty
const increaseQty=id=>{
    const updateProduct= product.map(abc=>{
        if(abc.id===id){
            return{...abc, quantity:abc.quantity+1}
        }
        return abc
    })
    setproduct(updateProduct)
    localStorage.setItem('cartItem',JSON.stringify(updateProduct))
}

// decrease quantity

const decreaseQty=id=>{
    const updateProduct= product.map(abc=>{
        if(abc.id===id && abc.quantity>1){
            return{...abc, quantity:abc.quantity-1}
        }

        // yesle item ko quantity bahek aru return gardaina 
        return abc
    })
    setproduct(updateProduct)
    localStorage.setItem('cartItem',JSON.stringify(updateProduct))
}

const removeCart=(id, title)=>{
    const confirmed= window.confirm("are you sure want to delete this item?")
    if(confirmed){
        const filterCart = product.filter(item=>item.id!==id)
        // yaha id le chai cart ko item ko id ho vane item.id vaneko chai card ma vako product ko id ho 
        localStorage.setItem('cartItem', JSON.stringify(filterCart))
        setproduct(filterCart)
        toast.success(`${title} has removed successfully`)
    }


}


  return (

   
   <>
   
        <ToastContainer theme='colored' position='top-center'/>
        <div className="container">
            <div className="row d-flex justify-content-between my-3">
            {product.length===0?
            <h2 className='text-center'>Your Cart is Empty</h2>
            :(
                <>
                <h2 className='text-center'>Your Cart item</h2>
                <div className="col-md-8 shadow-lg ">
                {product.map((item,i)=>(
                <div key={i}>
{/* pratayak div ma xutaxutai product basxa tiniharulai xutyauna key = i rakheko unique key */}

                    <div className="row justify-content-cnter d-flex py-2 pe-3">
                        <div className="col-2">
                            <img src={item.image} alt={item.title} width={50} />
                        </div>
                        <div className="col-3">
                            <strong>{item.title}</strong>
                        </div>
                        <div className="col-2 text-warning">
                            <span>${item.price}</span>
                        </div>
                        <div className="col-3"><button className="btn btn-primary" onClick={()=>increaseQty(item.id)}>+</button>&nbsp;
                        <span>{item.quantity}</span>&nbsp;
                        <button className='btn btn-secondary' onClick={()=>decreaseQty(item.id)}>-</button>

                        
                        </div>
                        <div className="col-1">
                            <button className='btn btn-danger' onClick={()=>removeCart(item.id, item.title)}><FaTrash/></button>
                        </div>
                    </div>
                    <hr />
                </div>)
                
                )}

                </div>
                <div className="col-md-3">
                    <div className="shadow py-2 px-3">
                        <h2>Cart Summary:</h2>
                        <p><strong>Unit:</strong>
                         {product.reduce((a,item)=>(a+Number(item.quantity)),0)}
                         </p>
                        <p><strong>Total:</strong>
                       {product.reduce((a,item)=>(a+parseFloat(item.price* item.quantity)),0)}
                        </p>
                        <hr />
                        <button className="btn btn-success">Check Out</button>
                    </div>
                </div>
                    
                </>
            )
            }

            </div>
        </div>



    </>
  )
}

export default Cart