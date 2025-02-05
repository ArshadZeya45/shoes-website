import React from "react"
import Navbar from "./Components/Navbar"
import Sidenav from "./Components/Sidenav"
import Login from "./Components/Login"
import Home from "./Home"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Signup from "./Components/Signup"
import AllProducts from "./Components/AllProducts"
import AddedProducts from "./Components/AddedProducts"
import About from "./Components/About"
import ProductDetails from "./Components/ProductDetails"



function App() {
  
  return (
    <>
     

     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/AllProducts" element={<AllProducts></AllProducts>}></Route>
      <Route path="/AddedProducts" element={<AddedProducts></AddedProducts>}></Route>
      <Route path = "/About" element={<About></About>}></Route>
      <Route path = "/ProductDetails/:index" element={<ProductDetails></ProductDetails>}></Route>
     </Routes>
     
     
    </>
  )
}

export default App
