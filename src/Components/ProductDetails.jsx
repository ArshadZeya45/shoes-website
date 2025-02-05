import { useContext } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../Context";


function ProductDetails(){

   const {data} = useContext(myContext)
   const {index} =  useParams()
     
    return(
        <>
         <div className="w-full lg:h-screen bg-black py-20 px-10 flex gap-5 flex-wrap">
            <div className="w-96 h-96 bg-red-700">
                <img src={data[index].image} alt="" className="w-full h-full object-cover"/>
               
            </div>
            <div className="lg:py-20 ">
                <div className="text-white ">
                    <h1 className="text-2xl lg:w-1/2">{data[index].name}</h1>
                    <h2 className="mt-4 text-lg">₹ {data[index].price}</h2>
                </div>

            </div>

            

         </div>

        </>
    )
}

export default ProductDetails;