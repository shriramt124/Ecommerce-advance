import React from "react";
import { Link } from "react-router-dom";

function CardProductUi({ product }) {
  return (
    <div className="relative hover:bg-slate-300 p-3 w-full  gap-2 justify-self-stretch  bg-slate-200 rounded-md flex flex-col">
      <img
        className=" h-[220px] rounded-md "
        src={product.image}
        alt="this is product"
      />

      <h3 className="text-3xl capitalize">{product.title}</h3>
      <p className="text-md capitalize">{product.description}</p>
      <p className="text-xl font-bold ">${product.price}</p>
      <div className="flex justify-between ">
        <button className="capitalize font-semibold bg-pink-400 p-2 text-slate-200 rounded-md shadow-md hover:bg-pink-200 hover:text-black ">
          Add to cart
        </button>
        <button className="capitalize font-semibold bg-pink-400 p-2 text-slate-200 rounded-md shadow-md hover:bg-pink-200 hover:text-black ">
         <Link to="/product/1234">view more</Link> 
        </button>
      </div>
    </div>
  );
}

export default CardProductUi;
