import { useState } from "react";

export default function HosCreteReq() {

    const [bloodGroup, setbloodGroup] = useState("");
    const [isEmergency, setIsEmergency] = useState<number>();
    const [approvals, setApprovals] = useState([
        {
            "name": "Dheeraj",
            "bloodG": "O+",
            "address": "shree ram vihar",
            "phone" : 9843845763
        },
        {
            "name": "Kunal",
            "bloodG": "A+",
            "address": "Rampura phatak",
            "phone" : 9843845763
        },
        {
            "name": "Harshit",
            "bloodG": "B+",
            "address": "Mahesh Nagar",
            "phone" : 9843845763
        },
        {
            "name": "Aryan",
            "bloodG": "O-",
            "address": "Vaishali",
            "phone" : 9843845763
        }
    ]);

    const [testRequest, setTestRequest] = useState([
        {
            "name": "Dheeraj",
            "credits": 30,
            "donations": 30,
            "phone" : 9843845763,
            "date" : ""
        },
        {
            "name": "Kunal",
            "credits" : 30,
            "donations": 30,
            "phone" : 9843845764,
            "date" : ""
        },
        {
            "name": "Harshit",
            "credits" : 30,
            "donations": 30,
            "phone" : 9843845743,
            "date" : ""
        },
        {
            "name": "Aryan",
            "credits" : 30,
            "donations": 30,
            "phone" : 9843345763,
            "date" : ""
        }
    ]);

    function setDate(e:React.ChangeEvent<HTMLInputElement>, phone: number){
        testRequest.forEach((item) => {
            if(item.phone == phone){
                item.date = e.target.value;
            }
        })
    }

    return (
        <div className="w-full pt-10 p-10 bg-gray-100">
            <div className="w-2/5 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Create Blood Request</h1>
                <div className="w-full flex items-center gap-4">
                    <select onChange={(e) => setbloodGroup(e.target.value)} id="bloodGroup" name="bloodGroup" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
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

                    <select onChange={(e) => setIsEmergency(parseInt(e.target.value))} id="bloodGroup" name="bloodGroup" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
                        <option value="1">Emergency</option>
                        <option value="0">General</option>
                    </select>

                    <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Create</button>
                </div>
            </div>

            <div className="mt-12 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Approval List</h1>
                <div>
                    <table className="w-full mt-12">
                        <thead>
                            <tr>
                                <th className="text-left">Name</th>
                                <th className="text-left">Blood Group</th>
                                <th className="text-left">Address</th>
                                <th className="text-left">Contact</th>
                                <th className="text-left">Accept</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvals.map((item) => {
                                return(
                                    <tr>
                                        <td className="p-2">{item.name}</td>
                                        <td className="p-2">{item.bloodG}</td>
                                        <td className="p-2">{item.address}</td>
                                        <td className="p-2">{item.phone}</td>
                                        <td className="p-2">{
                                            <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Create</button>   
                                        }</td>
                                    </tr>  
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-12 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Check Up Requests</h1>
                <div>
                    <table className="w-full mt-12">
                        <thead>
                            <tr>
                                <th className="text-left">Name</th>
                                <th className="text-left">Credits</th>
                                <th className="text-left">Donations</th>
                                <th className="text-left">Contact</th>
                                <th className="text-left">Date</th>
                                <th className="text-left">Approve</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testRequest.map((item) => {
                                return(
                                    <tr>
                                        <td className="p-2">{item.name}</td>
                                        <td className="p-2">{item.credits}</td>
                                        <td className="p-2">{item.donations}</td>
                                        <td className="p-2">{item.phone}</td>
                                        <td className="p-2"><input type="date" onChange={(e) => setDate(e, item.phone)} name="" id="" /></td>
                                        <td className="p-2">{
                                            <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Approve</button>   
                                        }</td>
                                    </tr>  
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <p>{bloodGroup}</p>
            <p>{isEmergency}</p> */}
        </div>
    )
}