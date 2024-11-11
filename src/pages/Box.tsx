import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";
import HospitalRegistration from "./HospitalRegistration";
import HospitalLogin from "./HospitalLogin";
import HosCreteReq from "./HosCreteReq";
import UserDashboard from "./UserDashboard";
import logo from '../assets/logo.png'

export default function Box() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="/userregistration" element={<UserRegistration/>} />
                    <Route path="/userlogin" element={<UserLogin />} />
                    <Route path="/hospitalregistration" element={<HospitalRegistration />} />
                    <Route path="/hospitallogin" element={<HospitalLogin/>} />
                    <Route path="/hosneedblood" element={<HosCreteReq />} />
                    <Route path="/userdashboard" element={<UserDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Layout() {

    function clearLocal(e: any){
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    return <div id="nav" className="flex flex-col min-h-screen ">
        <div className="w-full h-16 bg-white flex items-center justify-start gap-8 font-medium border-b-gray-500 pl-10">
            <Link to="/" className="navLinks hover:text-red-400 text-red-500 text-2xl font-bold">
                <img src={logo} alt="Vital Credits" className="h-12" />
            </Link>

            {
                (localStorage.getItem("hospitaltoken") !=null)
                ? 
                <Link to="/hosneedblood"  className="navLinks hover:text-red-400">Donations</Link>
                :
                " "
            }
            
            {
                (localStorage.getItem("usertoken") !=null)
                ?
                <Link to="/userdashboard" className="navLinks hover:text-red-400" >Dashboard</Link>
                :
                " "
            }

            {(localStorage.getItem("usertoken") != null || localStorage.getItem("hospitaltoken") !=null 
            ? 
            <button onClick={clearLocal} className="navLinks text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center absolute right-10 top-3">Logout</button>
            : 
            <Link to="/userlogin" className="navLinks text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center absolute right-10 top-3">Login</Link>)}
        </div>
        <main className="flex-1 h-full">
            <Outlet />
        </main>
    </div>
}