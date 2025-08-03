import React, { forwardRef } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = forwardRef(({show,setshow},ref2) => {

  function handel(){
    if(show == true){
      setshow(false)
    }
    else{
      setshow(true)
    }
    console.log(show);
  }
  return (
    <div ref={ref2} className="absolute top-0 left-0 h-20 flex items-center justify-center font-medium uppercase z-10 w-screen font-zentry text-2xl">
      <div className="flex justify-between items-center w-4/5 bg-white/50 rounded-lg py-2 px-2">
        <h1 className="bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text inline-block text-transparent">SkyCast</h1>
        {/* <div className="flex gap-7">
          <h1>History</h1>
          <h1>Contact</h1>
        </div>
        <h1>toggle</h1> */}
        <FaSearch onClick={handel}/>
      </div>
    </div>
  );
})

export default Navbar;
