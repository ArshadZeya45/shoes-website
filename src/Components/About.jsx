import Navbar from "./Navbar"
import Sidenav from "./Sidenav";
import Footer from "./Footer";


function About(){
    return(
        <>
          <Navbar></Navbar>
          <Sidenav></Sidenav>
          
        <div className=" lg:px-10 bg-zinc-900 h-screen text-white py-20 px-3">

            <h1 className="text-5xl font-bold">About</h1>
            <p className="mt-5 lg:w-1/3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero beatae quidem nihil provident voluptatibus incidunt labore odio est unde eveniet dol Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quia culpa? Ratione quas, vel repellendus quae, similique totam nam dolorem fugiat eligendi dolores fuga quam voluptatum blanditiis debitis cumque libero? Earum sed molestiae ullam et nobis, doloremque perferendis recusandae blanditiis aperiam debitis laboriosam illo autem odit odio ipsam praesentium inventore asperiores cumque minima dolor deleniti possimus? Tenetur sequi aperiam saepe provident ullam accusantium tempora quos ratione sapiente similique asperiores recusandae quo maxime, pariatur eos veritatis vitae suscipit expedita voluptatum adipisci voluptas. Facere laboriosam totam repellendus ipsam, doloribus officia ex inventore maiores eligendi consequuntur in magni, voluptatem fugit accusantium reiciendis obcaecati.</p>
        
        </div>
        <Footer></Footer>
        </>
    )
}
export default About;