import { useState } from "react"
import { Link } from "react-router-dom"

 
function CategoryStrip() {
    const [open,setIsOpen] = useState(false);
  return (
    <div className="flex justify-around bg-slate-200 p-4 shadow-md shadow-slate-300 capitalize text-slate-700 font-semibold ">
     <span><Link>Fashion</Link></span>
     <span><Link>footwear</Link></span>
     <span><Link>accessories</Link></span>
     <span><Link>winter fashion</Link></span>
     <span><Link>top </Link></span>
     <span className="flex flex-col gap-5 relative">
        <Link onMouseEnter={()=>setIsOpen(true)}  >More</Link>
        <ul onMouseLeave={()=>setIsOpen(false)} className={` ${open ? "flex":"hidden"} absolute top-[50px] right-0 gap-4 bg-slate-400 w-[500px] justify-between p-4 rounded-md shadow-md shadow-slate-300 text-white capitalize font-bold `}>
            <li>fashion</li>
            <li>Grocery</li>
            <li>fashion</li>
            <li>fashion</li>
            <li>fashion</li>
        </ul>
     </span>
    </div>
  )
}

export default CategoryStrip