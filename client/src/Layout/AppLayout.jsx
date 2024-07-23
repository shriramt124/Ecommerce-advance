import Footer from "../components/Footer"
 
import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
 
function AppLayout() {
  return (
    <div>
      {/* navbar */}
     <Navbar />
   
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