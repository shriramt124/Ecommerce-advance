import Footer from "../components/Footer"
 
import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import CategoryStrip from "../components/CategoryStrip"
import CarouSal from "../components/UI/CarouSal"
 
function AppLayout() {
  return (
    <div>
      {/* navbar */}
     <Navbar />
      {/* category  */}
      <CategoryStrip />
      <main>
      <Outlet />
      </main>
  
      {/* Outlet */}
     
      {/* footer */}
      <Footer />
      
    </div>
  )
}

export default AppLayout