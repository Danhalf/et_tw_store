import {FC} from "react";
import {Shops} from "../Shops/Shops.component";

export const Navbar: FC = () => {
    return (
        <>
            <nav className='flex py-4 items-center'>
                <Shops/>
            </nav>
        </>
    )
};