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
      },
      {
        path: "/product/:id",
        element: <ProductOverView />,
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
        path: "/account",
        element: <AccoutLayout />,
        children: [
          {
            path: "/account/profile",
            element: <Profile />,
          },
          {
            path: "/account/update-profile",
            element: <UpdateProfile />,
          },
        ],
      },
      {
        path: "/search",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
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
