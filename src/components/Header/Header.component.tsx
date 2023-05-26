import {FC} from "react";
import {Link} from "react-router-dom";

export const Header: FC = () => (
    <header className='container flex justify-end'>
        <Link to='/'>Shops</Link>
        <div className='mx-2'>|</div>
        <Link to='/cart'>Cart</Link>
    </header>
);
