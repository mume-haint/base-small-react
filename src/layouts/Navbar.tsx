import {Link} from "react-router-dom";
import ProfileCard from "../components/ProfileCard.tsx";

export default function Navbar() {
    return <>
        <div className="bg-blue-300 p-5">
            <div className="bg-gray-50">
                <ProfileCard/>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div>
                <Link to="/demo">Demo</Link>
            </div>
            <div>
                <Link to="/profile">Profile</Link>
            </div>
            <div>
                <Link to="/rhf-page">RHFPage</Link>
            </div>
        </div>
    </>
}