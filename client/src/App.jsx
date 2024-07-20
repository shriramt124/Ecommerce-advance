import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AppLayout from './componenets/ui/AppLayout'
import Home from './componenets/pages/Home'
import AllProducts from './componenets/pages/AllProducts'
import { loader as productLoader } from './componenets/pages/AllProducts'
import Errorui from './componenets/ui/Error'
 
const router = createBrowserRouter([
  {
    element:<AppLayout />,
    errorElement:<Errorui />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/all-products",
        element:<AllProducts />,
        errorElement:<Errorui />,
        loader:productLoader
        
          
      }
    ]
  }
])

function App() {
 
 return <RouterProvider router={router}/>
}

export default App
