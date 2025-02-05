import { useContext } from "react";
import { myContext } from "../Context";
import Card from "./Card";
import { useState } from "react";


function Page3() {
    const {data}= useContext(myContext)

    
   
    return(

        <>
        <div className="lg:py-10 lg:px-10 bg-zinc-900 text-white py-10 px-12  ">
            <h1 className="text-4xl lg:mb-7 mb-10 lg:text-left text-center ">Products</h1>
             <div className="flex flex-wrap  justify-center  lg:justify-between gap-5 ">
             {data.map((el,index)=>(
                <Card product={el} index = {index}></Card>
             ))}
             </div>

        </div>
        </>
    )
}
export default Page3;