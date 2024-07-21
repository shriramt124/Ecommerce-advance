import CarouSal from "../components/UI/CarouSal"
import { products } from "../data.js"
 
 

function Home() {
  return (
    <div> 
      <div className="text-white p-8 flex flex-col gap-10 justify-center bg-hero bg-cover bg-no-repeat w-full h-[400px]  ">
            <h1 className="text-[60px] capitalize">winter in style</h1>
            <p className="text-xl capitalize text-slate-300 ">shop trending pieces from top brands</p>
            <div className="flex gap-10">
              <button className=" border-2 border-[#c607f0] p-3 active:bg-pink-200 rounded-md hover:bg-[#c607f0] transition-all duration-300 hover:text-white font-bold px-10 ">Shop Womens</button>
              <button className="  border-2 active:bg-pink-200 border-pink-500 p-3 rounded-md hover:bg-pink-500 transition-all duration-300 hover:text-white font-bold px-10 ">Shop Womens</button>
            </div>
            </div>
    <div className="w-full flex flex-col gap-10 mt-10 ">
       <h1 className="text-5xl capitalize font-semibold text-center ">Top Fashion</h1>
      <CarouSal products={products}/>

    </div>

       

    <div className="w-full flex flex-col gap-10 mt-10 ">
       <h1 className="text-5xl capitalize font-semibold text-center ">Winter </h1>
      <CarouSal products={products}/>
    </div>
    </div>
  )
}

export default Home