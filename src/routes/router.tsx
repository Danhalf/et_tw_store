import {createBrowserRouter} from "react-router-dom";
import {cart, product, products} from "../constants/links";
import {Layout} from "../components/Layout/Layout.component";
import {Products} from "../pages/Products/Products";
import {Product} from "../pages/Product/Product";
import {Cart} from "../pages/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: products.link,
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products/>
            },
            {
                path: product.link,
                element: <Product/>
            },
            {
                path: cart.link,
                element: <Cart />
            }
        ]
    },

])