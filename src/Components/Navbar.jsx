import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { myContext } from "../Context";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Page3 from "./Page3";




function Navbar(){

    const {menu,open,data,getAddedItems} = useContext(myContext)

    
    

    return (
        <>
        <div className="navar w-full lg:py-4  bg-black text-white flex justify-between lg:px-10 items-center px-3 py-4 fixed top-0 z-30 ">
         <h1 className="lg:text-xl text-md lg:font-bold font-semibold uppercase">The shoes Company</h1>
         <div className="lg:flex gap-12 hidden">
         <NavLink to = "/" className={({isActive})=>isActive? "text-red-500" :"text-white"}>Home</NavLink>
         <NavLink to = "/AllProducts" className={({isActive})=>isActive ? "text-red-500" : "text-white"} >Products</NavLink>
         <NavLink to = "/About" className={({isActive})=>isActive ? "text-red-500" : "text-white"}  >About</NavLink>
         
         </div>
         <div className="  hidden lg:flex items-center gap-10">
            <Link to="/login" className="font-semibold text-2xl "><FaUserAlt /></Link>
            <Link to= "/AddedProducts" className="relative"><FaShoppingCart className="font-semibold text-3xl z-10"/>
              <div className="w-5 h-5 bg-black rounded-full absolute bottom-[70%] left-[50%] translate-x-[-50%] flex items-center justify-center "> 
                <h1 className="font-semibold">{getAddedItems().length}</h1>

              </div>
            </Link>
         </div>
         <span className="lg:hidden md:text-5xl text-3xl" onClick={menu}>{open == false ? <IoMenu /> :<RxCross2 />}</span>
         
        </div>
        </>
    )
}
export default Navbar;