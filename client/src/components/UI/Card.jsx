 
function Card({img,title,description}) {
  return (
    <div className=" w-[98%] flex flex-col justify-center gap-4 border-2 border-slate-400  p-4 hover:bg-blue-200 transition-all duration-300">
        <img src={img} alt="" className="w-[100%] h-[300px] sm:h-[350px] md:h-[400px] rounded"  />
        <h1 className="text-3xl capitalize font-bold ">{title}</h1>
        <p className="text-md">{description}</p>
         <div className="flex justify-between">
            <button className="bg-slate-300 p-3 rounded-md hover:bg-slate-400 hover:text-white font-bold px-10 ">Explore</button>
            <button className="bg-slate-300 p-3 rounded-md hover:bg-slate-400 hover:text-white font-bold px-10 ">$123</button>
         </div>
    </div>
  )
}

export default Card