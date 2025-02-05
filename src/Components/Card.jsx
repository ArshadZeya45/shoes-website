import { useContext, useState } from "react";
import { myContext } from "../Context";
import { SiEtsy } from "react-icons/si";
import { Link } from "react-router-dom";
import ShinyText from "./ShinyText";


  




function Card({product,index}){

    const {data,setData} = useContext(myContext)

    const handleCart = ()=>{
        const updatedData = data.map((el,idx)=>{
            if(idx === index) {
                return {...el , isAdded :!el.isAdded}
            } 
            return el
        })
        setData(updatedData)
    }
    

    


    



    return(
        <>
        
        <div className="card lg:w-64 bg-white w-72 mt-10 h-96 relative">
               <Link to = {`/ProductDetails/${index}`}>
                <div className="w-full h-48">
                    <img src= {product.image} alt=""  className="w-full h-full object-cover"/>
                </div>
                </Link>
                <div className="px-4 py-5 text-black">
                    <p>{product.name}</p>
                    <p>₹{product.price}</p>
                    {/* <button className= {`${product.isAdded ? "bg-teal-700" :"bg-black"} text-white font-semibold py-2 w-full mt-3`} onClick={handleCart}>{product.isAdded ? "Added" :"Add to Cart"}</button> */}
                    <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />

                </div>

             </div>

        

        </>
    )

    
}
export default Card;