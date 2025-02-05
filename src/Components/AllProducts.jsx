import { useContext } from "react";
import Navbar from "./Navbar";
import Page3 from "./Page3";
import Footer from "./Footer";
import Sidenav from "./Sidenav";


function AllProducts(){

   



    return(
        <>
        <Navbar></Navbar>
        <div className="pt-10">
            <Sidenav></Sidenav>

        <Page3></Page3>
        <Footer></Footer>
        </div>
        

        </>
    )
}
export default AllProducts;