import { Link, useLoaderData } from "react-router-dom";
import { getSingleProduct } from "../services/apihelper";

function ProductOverView() {
  const product = useLoaderData();
  return (
    <div className="bg-slate-200 p-4 sm:p-10 flex  flex-col justify-center ">
      <div className="flex flex-col sm:flex-row    m-auto justify-center gap-0">
        <div className="flex flex-col gap-4 w-[350px] xl:w-[600px] phone:w-[380px] sm:w-[400px] md:w-[500px] p-2 bg-white">
          <img src={product.prodImage[0]} className="w-[100%]" alt="" />

          <div className="flex gap-4 justify-between">
            {
              product.prodImage.map((img, index) => {
                return <img key={index} src={img} className="w-[100px] h
                [100px] rounded-md" alt="" />
                })}
          </div>
        </div>
        <div className="bg-white p-4 w-[380px] sm:w-[400px] md:w-[500px]">

          <div className="flex flex-col gap-4">
            <span className="text-blue-500 font-bold "><Link to={-1}>back</Link></span>
            <h1 className="capitalize text-5xl ">{product.title}</h1>
            <div className="text-md font-bold">rating:{product.rating}</div>
            <div className="size flex gap-5">
              <span>size1</span>
              <span>size2</span>
              <span>size3 </span>
            </div>

            <div className="flex mt-4 gap-10">
              <button className="bg-pink-400 p-4 font-semibold rounded-md hover:bg-slate-400 ">
                Add to cart
              </button>
              <button className="text-xl font-bold cursor-not-allowed">
                price
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>category and overview</h1>
    </div>
  );
}
export async function loader({params}){
   console.log(params);
   const res  = await getSingleProduct(params.id);
    return res.data;
  
}

export default ProductOverView;
