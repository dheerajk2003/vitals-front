import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserRegistration() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        phone: ''
    });

    const [bloodGroup, setbloodGroup] = useState("");

    const [voter, setVoter] = useState<string>();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleFile(e: React.ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files[0]){
            setVoter(URL.createObjectURL(e.target.files[0]));
        }
    }

    async function handleSubmit(){
        const request = await fetch("http://localhost:8080/donator/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password,
                bloodgroup: bloodGroup,
                address: formData.address,
                phoneno: formData.phone
            })
        });

        const data = await request.json();
        if(data){
            console.log("data : ", data);
        }
    }
        return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="w-2/6 mx-auto bg-white px-24 py-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-center mb-8">Registration</h1>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your name</label>
                    <input onChange={(e) => handleChange(e)} type="text" id="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name sirname" required />
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
                    <label htmlFor="bloodG" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your Blood Group</label>

                    <select onChange={(e) => setbloodGroup(e.target.value)} id="bloodGroup" name="bloodGroup" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="A1+">A1+</option>
                        <option value="A1-">A1-</option>
                        <option value="A2+">A2+</option>
                        <option value="A2-">A2-</option>
                        <option value="A1B+">A1B+</option>
                        <option value="A1B-">A1B-</option>
                        <option value="A2B+">A2B+</option>
                        <option value="A2B-">A2B-</option>
                        <option value="Bombay Blood Group">Bombay Blood Group</option>
                        <option value="INRA">INRA</option>
                        <option value="I Dont Know">I Dont Know</option>
                    </select>

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
                    <label htmlFor="voter" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-500">Your Voter</label>
                    <input placeholder="Voter" onChange={handleFile} type="file" id="voter" name="voter" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>

                <img src={voter} alt="" />

                <div className="flex items-start flex-col mb-5">
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already registered? <Link to="/userlogin" className="text-red-600 hover:underline dark:text-red-700">Login Now</Link></label>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital <Link to="/hospitallogin" className="text-red-600 hover:underline dark:text-red-700"> Login</Link></label>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hospital <Link to="/hospitalregistration" className="text-red-600 hover:underline dark:text-red-700">Registration</Link></label>
                </div>
                <button type="submit" className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Register new account</button>
            </form>
        </div>
    )
    
}