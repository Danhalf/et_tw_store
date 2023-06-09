import {FC} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "../Navbar/Navbar.component";
import {Header} from "../Header/Header.component";


export const Layout: FC = () =>
    <>
        <Header/>
        <div className="container flex flex-column h-screen mx-auto ">
            <Navbar/>
            <Outlet/>
        </div>
        {/*<ToastContainer position='bottom-right'/>*/}
    </>