import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Footer1 from "./Footer1"
 

function AppLayout() {
  return (
    <div >
       <Navbar />
       <main>
       <Outlet />
       </main>
       <Footer1 />
        
    </div>
  )
}

export default AppLayout