import { Link } from "react-router-dom";
import { category } from "../../../category.js";
import Linkui from "./Linkui.jsx";

console.log(category);
function Navbar() {
  const linkStyle = `p-2 capitalize font-semibold cursor-pointer hover:text-white text-[20px]`;
  const LinkClasses = `capitalize hover:text-yellow-500  transition-all duration-500`;
  return (
    <nav>
      <div className="flex bg-black justify-between p-5 text-slate-300 items-center ">
        <div>
          <Linkui>
            <span className="flex flex-col  ">
              <span className="text-3xl sm:text-5xl text-yellow-500">My</span>
              <span className="text-sm font-bold">Cottage</span>
            </span>
          </Linkui>
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-2.5   w-1/4 rounded-md focus:outline-yellow-500 bg-slate-100
        text-md sm:text-xl sm:py-3 sm:px-2.5
        text-yellow-800
        font-semibold
        transition-all 
        duration-300
        capitalize
       focus:scale-[1.01]

        "
        />

        <div className="flex gap-4 sm:gap-8 text-md sm:text-xl capitalize ">
          <Link to="/" className={LinkClasses}>
            login
          </Link>
          <Link className={LinkClasses}>about us</Link>
          <Link className={LinkClasses}>profile</Link>
        </div>
      </div>
      <div className="categories flex justify-center gap-4 bg-yellow-500 text-slate-200 p-2 shadow-sm shadow-orange-500 overflow-x-auto">
        {category.map((name) => (
          <Link to="/" className={linkStyle} key={Math.random() * Math.random()}>
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
