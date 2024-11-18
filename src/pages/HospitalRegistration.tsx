
import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HospitalRegistration() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        pincode: ''
    });

    const [certificate, setCertificate] = useState<File | null>();

    useEffect(() => {
        if(localStorage.getItem("hospitaltoken")){
            navigate("/hosneedblood");
        }
    },[]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleFileCert(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            setCertificate(e.target.files[0]);
        }
    }

    async function handleSubmit(e : FormEvent) {
        e.preventDefault();

        const form = new FormData();
        if (certificate != null) {
            form.append("name", formData.name)
            form.append("email", formData.email)
            form.append("password", formData.password)
            form.append("address", formData.address)
            form.append("phoneno", formData.phone)
            form.append("pincode", formData.pincode)
            form.append("cert", certificate)
        }

        const responce = await fetch("/hospital/register",{
            method: "POST",
            body: form
        })
        console.log(responce);
        const data = await responce.json();
        if(data.token){
            localStorage.setItem("hospitaltoken", data.token);
            window.location.reload();
            // navigate("/hosneedblood");
        }
        else{
            alert("Unable to Register");
        }
    }
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="w-2/6 mx-auto bg-white px-24 py-12 shadow-md rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center mb-8">Hospital Registration</h1>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Hospital name</label>
                    <input onChange={(e) => handleChange(e)} type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Hospital" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your email</label>
                    <input onChange={(e) => handleChange(e)} type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your password</label>
                    <input placeholder="password" onChange={(e) => handleChange(e)} type="password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your Address</label>
                    <input placeholder="address" onChange={(e) => handleChange(e)} type="text" id="address" name="address" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your Contact</label>
                    <input placeholder="Contact" onChange={(e) => handleChange(e)} type="number" id="phone" name="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="pincode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Area Pincode</label>
                    <input placeholder="PinCode" onChange={(e) => handleChange(e)} type="number" id="pincode" name="pincode" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="certificate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">NABH Accredation Certificate</label>
                    <input placeholder="NABH" onChange={handleFileCert} type="file" id="certificate" name="certificate" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>


                <div className="flex items-start mb-5">
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already registered? <Link to="/hospitallogin" className="text-red-600 hover:underline dark:text-red-700">Login Now</Link></label>
                </div>
                <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Register new account</button>

            </form>

        </div>
    )

}