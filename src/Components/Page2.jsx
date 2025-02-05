import React, { useContext } from "react";
import { myContext } from "../Context";



function Page2(){

  const {getAddedItems,image}=useContext(myContext)
  console.log(getAddedItems())
  
    return(
        <>
        <div className="w-full bg-black text-white lg:px-10 px-3 lg:py-10 py-16 px-3">
            <h1 className="text-4xl">OUR TOP SNEAKERS</h1>

            <div className="w-full py-10  bg-black  mt-10 flex items-center  gap-5 whitespace-nowrap overflow-x-auto hide-scrollbar">
                {image.map((el,index)=>(
                  <div className="w-60 h-60 bg-black shrink-0">
                  <img src={el.image} alt=""  className="w-full h-full object-cover"/>
                </div>
                
                ))}
                
                

            </div>

            <h1 className="lg:mt-10 lg:text-3xl lg:w-[50%] text-xl w-[80%]">
            Discover our latest collection of sneakers, designed for ultimate comfort and style. From sleek urban designs to performance-ready athletic shoes, find your perfect pair and elevate your footwear game today!
            </h1>

        </div>
        </>
    )
}

export default Page2