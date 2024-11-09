import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import UserRegistration from "./UserRegistration";
import UserLogin from "./UserLogin";
import HospitalRegistration from "./HospitalRegistration";
import HospitalLogin from "./HospitalLogin";
import HosCreteReq from "./HosCreteReq";

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
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

function Layout() {

    return <div id="nav" className="flex flex-col min-h-screen ">
        <div className="w-full h-16 bg-white flex items-center justify-center gap-8 font-medium border-b-gray-500 ">
            <Link to="/" className="navLinks">Home</Link>
            <Link to="/hosneedblood"  className="navLinks">Activities</Link>
            <Link to="/userlogin" className="navLinks text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center absolute right-10 top-3">Login</Link>
        </div>
        <main className="flex-1 h-full">
            <Outlet />
        </main>
    </div>
}