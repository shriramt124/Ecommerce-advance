import { Outlet } from "react-router-dom"
import Profile from "../pages/Profile"
import CreateProduct from "../pages/CreateProduct"

 

function AdminLayout() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AdminLayout