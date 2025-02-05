import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(){

    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1);
    }

   
    return(
        <>
        <div className="w-full bg-zinc-700 h-screen flex items-center justify-center relative lg:px-40">
            <button className="absolute top-[3%] left-[5%] w-12 h-12 bg-white rounded-full flex items-center justify-center " onClick={goBack}><IoArrowBackOutline className="text-2xl" /></button>

            <div className="bg-black lg:w-1/3 text-white flex flex-col gap-5  items-center py-16 lg:px-20 px-16 ">
              <h1 className="text-2xl mb-5 font-bold">The Shoes Company</h1>
              <h1 className="text-2xl font-semibold mb-3">Login</h1>
              <input type="text" placeholder="Enter Your Username" className="w-full outline-none py-1 text-black px-2"/>
              <input type="password" placeholder="Enter Your Password" className="w-full outline-none py-1 text-black px-2" />
              <button className="w-full py-2 bg-red-800 font-semibold mt-3">Login</button>
               
            </div>


        </div>
        </>
    )
}

export default Login;