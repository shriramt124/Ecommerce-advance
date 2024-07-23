import { Outlet } from "react-router-dom"
import Profile from "../pages/Profile"

 

function AccoutLayout() {
  return (
    <div>
      <Profile />
      <Outlet />
    </div>
  )
}

export default AccoutLayout