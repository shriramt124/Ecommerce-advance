 
import './App.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom"
import AppLayout from './componenets/ui/AppLayout'
import Home from './componenets/pages/Home'

const router = createBrowserRouter([
  {
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element:<Home />
      }
    ]
  }
])

function App() {
 
 return <RouterProvider router={router}/>
}

export default App
