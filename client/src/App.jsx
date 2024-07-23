import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import ProductOverView from "./pages/ProductOverView";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import CreateProduct from "./pages/CreateProduct";
import AdminLayout from "./Layout/AdminLayout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import Profile from "./pages/Profile";
import OrderDetails from "./pages/OrderDetails";
import Checkout from "./pages/Checkout";
import AccoutLayout from "./Layout/AccoutLayout";
import UpdateProduct from "./pages/UpdateProduct";
import AdminAllProduct from "./pages/AdminAllProduct";
import { action as loginaction } from "./pages/Login";
import Error from "./components/UI/Error";
import { loader as productLoader } from "./pages/AllProducts";
import { loader as productDetailsLoader } from "./pages/ProductOverView";
import { action as signupaction } from "./pages/Signup";
import {loader as profileLoader} from "./pages/Profile";
import {action as updateProfileAction} from "./pages/Profile"
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/allProducts",
        element: <AllProducts />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: "/product/:id",
        element: <ProductOverView />,
        loader: productDetailsLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/order/:id",
        element: <OrderDetails />,
      },

      {
        path: "/profile",
        element: <Profile />,
        loader:profileLoader,
        errorElement:<Error />,
        action:updateProfileAction
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/search",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginaction,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        action: signupaction,
        errorElement: <Error />,
      },

      {
        path: "/admin/create-product",
        element: <CreateProduct />,
        role: "admin", // only accessible by admin
      },
      {
        path: "/admin/update-product/:id",
        element: <UpdateProduct />,
        role: "admin", // only accessible by admin
      },
      {
        path: "/admin/allProduct",
        element: <AdminAllProduct />,
        role: "admin", // only accessible by admin
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
