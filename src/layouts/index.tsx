import Header from "./Header.tsx";
import Navbar from "./Navbar.tsx";
import {Outlet} from "react-router-dom";

export default function DashboardLayout() {
    return <div className="h-screen flex flex-col">
        <div>
            <Header />
        </div>
        <div className="flex flex-1 overflow-hidden">
            <Navbar />
            <div className="flex-1 overflow-scroll">
                <Outlet />
            </div>
        </div>
    </div>
}