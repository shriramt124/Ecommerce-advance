import { Link } from "react-router-dom";

function ProductOverView() {
  const product = {
    title: "title",
    price: 100,
    description: "description",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "category",
    rating: 5,
  };
  return (
    <div className="bg-slate-200 p-4 sm:p-10 flex  flex-col justify-center ">
      <div className="flex flex-col sm:flex-row    m-auto justify-center gap-0">
        <div className="flex flex-col gap-4 w-[350px] xl:w-[600px] phone:w-[380px] sm:w-[400px] md:w-[500px] p-2 bg-white">
          <img src={product.image} className="w-[100%]" alt="" />

          <div className="flex gap-4 justify-between">
            <img className="w-[100px]" src={product.image} alt="" />
            <img className="w-[100px]" src={product.image} alt="" />
            <img className="w-[100px]" src={product.image} alt="" />
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

export default ProductOverView;
