import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages/index"
import { ErrorElement } from "./components"

// loaders
import {loader as landingLoader} from "./pages/Landing"
import {loader as singleProductLoader} from "./pages/SingleProduct"
import {loader as productsLoader} from "./pages/Products"


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout/>,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Landing/>,
        loader: landingLoader,
        ErrorElement: <ErrorElement/>,
      },
      {
        path: "/products",
        element: <Products/>,
        loader: productsLoader,
        ErrorElement: <ErrorElement/>,
      },
      {
        path: "/products/:id",
        element: <SingleProduct/>,
        loader: singleProductLoader,
        ErrorElement: <ErrorElement/>,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/checkout",
        element: <Checkout/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: "register",
    element: <Register/>,
    errorElement: <Error/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
    
  )
}

export default App