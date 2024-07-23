import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const islogin = false;
  const [isOpen,setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center bg-slate-500 px-[40px] py-[30px]">
      <h1 className="text-3xl uppercase text-white font-bold sm:text-5xl">
        logo
      </h1>
      <input
        className=" w-[180px] sm:w-2/4 px-2 py-3 rounded-md border:none focus:outline-none focus:ring-3 focus:ring-yellow-500 transition-all duration-300"
        type="text"
        placeholder="Search products"
      />
      <div>
        {!islogin && (
          <button className="transition-all duration-300 hover:scale-105 text-2xl bg-[#d2b703] px-4 py-2 rounded text-white hover:bg-[#e8ab04]">
            <Link to="/login">Login</Link>
          </button>
        )}
        {islogin && (
          <>
            <span className="relative flex flex-col justify-center items-center">
              <span onClick={()=>setIsOpen(prev => !prev)} className="capitalize text-white z-100 bg-yellow-500 w-[80px] sm:w-[120px]  text-center  text-xl sm:text-2xl  rounded-md px-2 py-2  cursor-pointer ">
                Account
              </span>
              <ul   className={`${isOpen ? "absolute":"hidden"} z-10 top-[60px] flex flex-col gap-4 bg-yellow-500  rounded-lg text-white capitalize w-[140px] sm:w-[200px] p-2 sm:p-2 transition-all duration-300 `}>
                <li className="hover:bg-blue-500 p-2 rounded-lg transition-all duration-300 cursor-pointer ">
                   <Link to="/account/profile">profile</Link>
                </li>
                <li className="hover:bg-blue-500 p-2 rounded-lg transition-all duration-300 cursor-pointer ">
                  cart
                </li>
                <li className="hover:bg-blue-500 p-2 rounded-lg transition-all duration-300 cursor-pointer ">
                  Logout
                </li>
              </ul>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
