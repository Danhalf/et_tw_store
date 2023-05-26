import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "../Navbar.component";


export const Layout: FC = () =>
    <>
        <div className="container flex flex-column h-screen mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
        {/*<ToastContainer position='bottom-right'/>*/}
    </>