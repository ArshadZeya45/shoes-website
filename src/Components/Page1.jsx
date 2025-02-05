import BlurText from "./BlurText";
import ConfettiEffect from "./ConfettiEffect";

function Page1() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <>
      <div
        className="w-full h-screen relative"
        
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1636718281370-b5e3f51a5af2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ConfettiEffect />
        <div className="w-full h-full bg-black opacity-80 absolute inset-0"></div>
        <h1 className=" uppercase text-5xl font-semibold lg:text-7xl lg:w-[40%] text-white relative lg:pt-48 lg:px-10 px-3 pt-32 ">
          your truly sneakers
        </h1>
        <BlurText
          text="Isn't this so cool?!"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-4xl mb-2 text-white font-semibold ml-5"
        />
        <p className="lg:mt-20 lg:w-[30%] lg:text-2xl mt-10 text-2xl w-[70%] relative text-white lg:px-10 px-3 ">
          "Be a part of our sneaker community and stay updated with the latest
          trends, releases, and exclusive offers. Sign up for our newsletter
          today!"
        </p>
      </div>
    </>
  );
}
export default Page1;
