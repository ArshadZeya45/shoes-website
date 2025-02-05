import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer(){
    return (
        <>
        <div className="lg:py-20 lg:px-10 text-white bg-zinc-700 flex lg:gap-20 flex-wrap px-3 py-10 gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">Company</h1>
            <Link>About us</Link>
            <Link>Our Services</Link>
            <Link>Privicy</Link>
            <Link>Contact us</Link>


          </div>
          <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Get Help</h1>
            <Link>FaQ</Link>
            <Link>Shipping</Link>
            <Link>Return</Link>
            <Link>Order Status</Link>
            <Link>Payment Option</Link>

          </div>
          <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">Online Shop</h1>
            <Link>Shoes</Link>
            <Link>Sneakers</Link>

          </div>
          <div>
            <h1 className="text-xl font-semibold">Follow us</h1>
             <div className="flex gap-4 mt-4">
              <span><FaFacebook  className="text-3xl text-blue-500"/></span>
              <span><FaInstagramSquare className="text-3xl text-pink-700"/></span>
              <span><FaTwitter className="text-3xl text-blue-900" /></span>
              <span><FaLinkedin  className="text-3xl text-blue-700"/></span>
              </div>

          </div>
        </div>
        </>
    )
}

export default Footer