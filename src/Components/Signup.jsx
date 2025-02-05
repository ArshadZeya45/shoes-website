import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup(){

    const navigate = useNavigate()

    const goBack = ()=>{
        navigate(-1);
    }

   
    return(
        <>
        <div className="w-full bg-zinc-700 h-screen flex items-center justify-center relative">
            <button className="absolute top-[1%] left-[5%] w-12 h-12 bg-white rounded-full flex items-center justify-center " onClick={goBack}><IoArrowBackOutline className="text-2xl" /></button>

            <div className="lg:w-[25%] w-[95%] bg-black text-white flex flex-col items-center py-6 gap-4 lg:px-16 px-10 md:w-[60%] ">
                <h1 className="text-xl font-semibold uppercase text-center  ">Create an Account</h1>
                <div className="w-full">
                <input type="text" placeholder="Enter Your Username" className="outline-none w-full py-2 text-black px-2 font-semibold "/>
                </div>
                <div className="w-full">
                <input type="email" placeholder="Enter Your Email" className="outline-none w-full py-2 text-black px-2 font-semibold "/>
                </div>
                <div className="w-full">
                <input type="text" placeholder="Enter Your Phone Number" className="outline-none w-full py-2 text-black px-2 font-semibold "/>
                </div>
                <div className="w-full">
                <input type="password" placeholder="Enter Your Password" className="outline-none w-full py-2 text-black px-2 font-semibold" />
                </div>
                <button className="w-full py-2 font-semibold bg-red-700">Sign Up</button>
                   <p className="text-lg">Or With</p>
                <div className="text-center">
                <button className="w-full py-2 font-semibold bg-blue-700 mb-5">Sign Up With Facebook</button>
                <button className="w-full py-2 font-semibold border-2 mb-5">Sign Up With Google</button>

                <h1>Already have an account? <Link className="text-red-700 font-semibold" to = '/login'>Login</Link></h1>
                
                </div>
                
            </div>


        </div>
        </>
    )
}

export default Signup;