import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const islogin = true;
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className=" z-10 flex justify-between items-center bg-slate-500 px-[40px] py-[30px]">
      <h1 className="text-3xl uppercase text-white font-bold sm:text-5xl">
        logo
      </h1>
      <input
        className=" hidden md:block w-[180px] sm:w-2/4 px-2 py-3 rounded-md border:none focus:outline-none focus:ring-3 focus:ring-yellow-500 transition-all duration-300"
        type="text"
        placeholder="Search products"
      />
      <div>
        {!islogin && (
          <button className="z-10 transition-all duration-300 hover:scale-105 text-2xl bg-[#d2b703] px-4 py-2 rounded text-white hover:bg-[#e8ab04]">
            <Link to="/login">Login</Link>
          </button>
        )}
        {islogin && (
          <div className="flex relative gap-10 justify-center items-center">
         <span className="text-xl "><Link to="/cart">Cart</Link></span>
            <span
              className="cursor-pointer text-xl capitalize"
              onClick={() => {setIsBurgerOpen((prev) => !prev) ; setIsCategoryOpen(false)}}
            >
              menue
            </span>
            <div onMouseLeave={()=>setIsBurgerOpen(false)} className={` ${isBurgerOpen ? "absolute" :"hidden"} transition-all duration-300 z-10 flex flex-col p-1 gap-1 top-10  right-0 bg-pink-400 rounded-md`}>
              <button className=" text-xl capitalize px-4 py-2 bg-slate-200 rounded-md ">
              <Link to="/profile">profile</Link>
              </button>
              <button className=" text-xl capitalize px-4 py-2 bg-slate-200 rounded-md ">
                logout
              </button>
              <button className="text-xl capitalize px-4 py-2 bg-slate-200 rounded-md ">
                cart
              </button>
              <button className="relative mb-2">
                <button onMouseEnter={()=>setIsCategoryOpen(true)} className="  text-xl capitalize px-4 py-2 bg-slate-200 rounded-md ">
                  categories
                </button>
               {isCategoryOpen && <div  onMouseLeave={()=>setIsCategoryOpen(false)} className=" z-10 absolute flex flex-col p-1 gap-1 right-[140px]  -top-10 bg-slate-400 rounded-md ">
                  <button className="bg-slate-200 px-4 py-2 text-xl rounded-md ">
                    men
                  </button>
                  <button className="bg-slate-200 px-4 py-2 text-xl rounded-md ">
                    women
                  </button>
                  <button className="bg-slate-200 px-4 py-2 text-xl rounded-md ">
                    kid
                  </button>
                  <button className="bg-slate-200 px-4 py-2 text-xl rounded-md ">
                    accessories
                  </button>
                </div>}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
