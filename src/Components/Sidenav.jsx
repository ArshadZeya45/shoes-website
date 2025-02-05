import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { myContext } from "../Context";

function Sidenav(){
    const {menu,open,getAddedItems}=useContext(myContext)
    
    return (
        <>
        <div className={`w-[70%] bg-zinc-800 text-white fixed top-[3%]  ${open == false ? "-translate-x-full":"translate-x-0 "} flex flex-col items-center py-32 gap-10 text-xl transform-transition duration-1000 ease-in-out lg:hidden z-10 md:py-40 md:text-2xl`}>
            <Link to="/">Home</Link>
            <Link to = "/AllProducts">Products</Link>
            <Link to = '/login'>Login</Link>
            <Link className="flex items-center gap-4">Cart <span className="text-red-700 text-2xl font-semibold">{getAddedItems().length}</span></Link>
            <Link to ='/About'>About</Link>
        </div>
        </>
    )
}
export default Sidenav;