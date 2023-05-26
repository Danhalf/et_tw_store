import {createBrowserRouter} from "react-router-dom";
import {product, products} from "../constants/links";
import {Products} from "../components/Products/Products.component";
import {ProductItem} from "../components/Products/ProductItem/ProductItem.component";
import {Layout} from "../components/Layout/Layout.component";

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
                element: <ProductItem/>
            }]
    },

])