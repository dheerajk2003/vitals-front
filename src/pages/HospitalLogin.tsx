import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export default function HospitalLogin(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    async function handleSubmit(e : FormEvent) {
        e.preventDefault();
        const responce = await fetch("http://localhost:8080/hospital/login", {
            method: "POST",
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        })
        const data = await responce.json();
        if(data.token){
            localStorage.setItem("hospitaltoken", data.token)
            navigate("/hosneedblood");
        }
        else{
            alert("Unable to login");
        }
        console.log(data);
    }


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="w-2/6 mx-auto bg-white px-20 py-24 shadow-md rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center mb-12">Hospital Login</h1>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Hospital Email</label>
                    <input onChange={(e) => handleChange(e)} type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your password</label>
                    <input placeholder="password" onChange={(e) => handleChange(e)} type="password" id="password" name="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="flex items-start mb-5">
                    {/* <div className="flex items-center h-5">
                        <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div> */}
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not a User? <Link to="/hospitalregistration" className="text-red-600 hover:underline dark:text-red-700">Register Now</Link></label>
                </div>
                <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Login into account</button>

                

            </form>

        </div>
    )
}