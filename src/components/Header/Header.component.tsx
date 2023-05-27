import {FC} from "react";
import {Link} from "react-router-dom";
import {cart, products} from "../../constants/links";

export const Header: FC = () => (
    <header className='container flex justify-end'>
        <Link to={products.link}>Shops</Link>
        <div className='mx-2'>|</div>
        <Link to={cart.link}>{cart.text}</Link>
    </header>
);
