import React from "react";
import Testimonial from "./Components/Testimonial";
import reviews from "./data";

const App = () => {
  return <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

  {/* Heading Section  */}
  <div className="text-center">
  <h1 className="text-4xl font-bold"> Our Testimonials </h1>
  

  {/* Underline Div */}
  <div className="bg-violet-400 h-[4px] w-[70px] mt-2 mx-auto"></div>


  {/* Testimonial Section */}
  <Testimonial reviews={reviews}/> 

  </div>
  </div>;
};

export default App;
