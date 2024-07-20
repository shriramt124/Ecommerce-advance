import { getAllProducts } from "../../services/apiHelper.js";
import { Link, useLoaderData } from "react-router-dom";
import BrandCard from "../ui/BrandCard.jsx";
import DisplayProduct from "./Products/DisplayProduct.jsx";
import { products } from "../../services/data.js";
import Card from "../ui/Card.jsx";
import CardSliderUi from "../ui/CardSliderUi.jsx";

function AllProducts() {
  const fashion = products;
  //get the fashion category

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row  gap-4">
        <div className="flex flex-col justify-end relative  w-full  h-[200px] sm:h-[500px] p-2 py-4  rounded-lg bg-bg2 bg-cover bg-no-repeat">
          <div className="absolute bottom-0 left-0 h-full w-full bg-black backdrop-blur-sm transition duration-300 ease-in-out hover:bg-black opacity-30"></div>
          <div className="flex flex-col gap-4 justify-end text-white  absolute bottom-2 sm:bottom-8 mb-5 left-4">
            <h1 className="text-2xl capitalize sm:text-3xl md:text-5xl">
              execlusive brands
            </h1>
            <p className="text-white capitalize sm:text-xl md:text-2xl">
              shop the execlusive brands for this website
            </p>
            <Link to="/" className="capitalize text-xl hover:text-blue-500">
              shop now
            </Link>
          </div>
        </div>
        {/* -------------------------------------------------------------- */}
        <div className="flex flex-col justify-end relative  w-full  h-[200px] sm:h-[500px] p-2 py-4  rounded-lg bg-bg1 bg-cover bg-no-repeat">
          <div className="absolute bottom-0 left-0 h-full w-full bg-black backdrop-blur-sm transition duration-300 ease-in-out hover:bg-black opacity-30"></div>
          <div className="flex flex-col gap-4 justify-end text-white  absolute bottom-2 sm:bottom-8 mb-5 left-4">
            <h1 className="text-2xl capitalize sm:text-3xl md:text-5xl">
              Winter brands
            </h1>
            <p className="text-white capitalize sm:text-xl md:text-2xl">
              stay safe in upcomming winters by top brands
            </p>
            <Link to="/" className="capitalize text-xl hover:text-blue-500">
              shop now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-8 overflow-auto bg-slate-200 p-2 text-xl capitalize">
        <span>free delivery</span>
        <span>hustle free</span>
        <span>safty gurantee</span>
        <span>easy return</span>
      </div>

      {/* modern footwears */}
      <div className="flex flex-col gap-6 p-4">
        <h1 className="text-3xl sm:text-5xl text-center">Fashion store</h1>
        <DisplayProduct products={fashion} />
      </div>

      
        
         <div  className="flex flex-col gap-2">
          <h1 className="text-[30px] text-center">Top Picked</h1>
          <CardSliderUi data={products}/>
         </div>
      <div className="flex flex-col justify-center items-center p-4 my-4 gap-4 ">
        <Link to="/" className="text-5xl capitalize text-slate-900 font-bold">Follow Us </Link>
        <p className="text-xl  text-slate-800">Can't get enough of us? Follow us on socials for more daily surf, fashion and lifestyle content...</p>
      </div>
      {/* upcomming winters */}
    </div>
  );
}

export async function loader() {
  const products = await getAllProducts();
  return products;
}

export default AllProducts;
