import React from "react"
import Navbar from "./Components/Navbar"
import Sidenav from "./Components/Sidenav"
import Page1 from "./Components/Page1"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Footer from "./Components/Footer"



function Home(){
    return(
        <>
        <div className="relative">
        <Navbar></Navbar>
       
        <Sidenav></Sidenav>

        <div className="">
        <Page1></Page1>
        <Page2></Page2>
        <Page3></Page3>
        <Footer></Footer>
        </div>
        </div>
       


        </>
    )
}

export default Home;