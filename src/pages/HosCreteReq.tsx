import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HosCreteReq() {

    const navigate = useNavigate();

    const [bloodGroup, setbloodGroup] = useState("");
    const [isEmergency, setIsEmergency] = useState<number>();
    const [units, setUnits] = useState<number>();
    // const [approvals, setApprovals] = useState([
    //     {
    //         "name": "Dheeraj",
    //         "bloodG": "O+",
    //         "address": "shree ram vihar",
    //         "phone" : 9843845763
    //     },
    //     {
    //         "name": "Kunal",
    //         "bloodG": "A+",
    //         "address": "Rampura phatak",
    //         "phone" : 9843845763
    //     },
    //     {
    //         "name": "Harshit",
    //         "bloodG": "B+",
    //         "address": "Mahesh Nagar",
    //         "phone" : 9843845763
    //     },
    //     {
    //         "name": "Aryan",
    //         "bloodG": "O-",
    //         "address": "Vaishali",
    //         "phone" : 9843845763
    //     }
    // ]);

    type request = {
        AcceptedBy:{
            Valid: boolean
            Int64: number
        }
        Id: number
        BloodGroup: string
        Type: number
        Unit: number
    }

    const [testRequest, setTestRequest] = useState<request[]>([]);

    useEffect(() => {
        if(!localStorage.getItem("hospitaltoken")){
            navigate("/hospitallogin");
        }
        getHospitalsReq();
    },[]);

    async function getHospitalsReq(){
        const responce = await fetch("http://localhost:8080/hospital/requests", {
            method: "GET",
            headers: {
                'X-TOKEN': `${localStorage.getItem("hospitaltoken")}`
            }
        })
        const data = await responce.json();
        if(data){
            console.log(data.requests);
            setTestRequest(data.requests);
        }
    }

    // function setDate(e:React.ChangeEvent<HTMLInputElement>, phone: number){
    //     testRequest.forEach((item) => {
    //         if(item.phone == phone){
    //             item.date = e.target.value;
    //         }
    //     })
    // }

    async function sendFunction(e : React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault();
        const responce = await fetch("http://localhost:8080/hospital/createRequest",{
            method: "POST",
            body: JSON.stringify({
                blood_group: bloodGroup,
                need_type: isEmergency,
                unit: units
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-TOKEN': `${localStorage.getItem("hospitaltoken")}`,
            }
        })
        if(responce.status  == 200){
            alert("Successful");
            getHospitalsReq();
        }
        else{
            alert("Failed");
        }
    }

    async function hosDelReq(int:number) {
        const responce = await fetch(`http://localhost/hospital/remRequest?id=${int}`,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-TOKEN': `${localStorage.getItem("hospitaltoken")}`
            }
        })
        if(responce.status == 200){
            alert("Successful");
            window.location.reload();
        }
        else{
            alert("Failed");
        }
    }

    return (
        <div className="w-full pt-10 p-10 bg-gray-100">
            <div className=" shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Create Blood Request</h1>
                <div className="w-full flex items-center gap-4">
                    <select onChange={(e) => setbloodGroup(e.target.value)} id="bloodGroup" name="bloodGroup" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
                        <option value="" defaultChecked disabled>Blood Group</option>
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
                        <option value="INRA">INRA</option>
                        <option value="IDK">I Don't know</option>
                    </select>

                    <select onChange={(e) => setIsEmergency(parseInt(e.target.value))} id="bloodGroup" name="bloodGroup" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required >
                        <option value="" defaultChecked disabled>Type</option>
                        <option value="0">General</option>
                        <option value="1">Emergency</option>
                    </select>

                    <input placeholder="Units Required" onChange={(e) => setUnits(parseInt(e.target.value))} type="number" id="unit" name="unit" className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />

                    <button type="submit" onClick={sendFunction} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Create</button>
                </div>
            </div>

            {/* <div className="mt-12 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Blood Requests</h1>
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
                                            <button type="submit" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Approve</button>   
                                        }</td>
                                    </tr>  
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div> */}

            <div className="mt-12 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Pending</h1>
                <div>
                    <table className="w-full mt-12">
                        <thead>
                            <tr>
                                <th className="text-left">Blood Group</th>
                                <th className="text-left">Type</th>
                                <th className="text-left">Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (testRequest != null) ? testRequest.map((item) => {
                                    return(
                                        <>
                                        {(item.AcceptedBy.Valid == true) ? " " : 
                                            <tr>
                                            <td className="p-2">{item.BloodGroup}</td>
                                            <td className="p-2">{item.Type > 0 ? 'Emergency' : 'General'}</td>
                                            <td className="p-2">{item.Unit}</td>
                                            <td>
                                                <button type="submit" 
                                                    onClick={() => hosDelReq(item.Id)} 
                                                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr> 
                                        }
                                        
                                        </> 
                                    )
                                }) : " "
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-12 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Approved Requests</h1>
                <div>
                    <table className="w-full mt-12">
                        <thead>
                            <tr>
                                <th className="text-left">Blood Group</th>
                                <th className="text-left">Type</th>
                                <th className="text-left">Units</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(testRequest && testRequest != null)?testRequest.map((item) => {
                                return(
                                    <>
                                    {(item.AcceptedBy.Valid == true) ? <tr>
                                        <td className="p-2">{item.BloodGroup}</td>
                                        <td className="p-2">{item.Type > 0 ? 'Emergency' : 'General'}</td>
                                        <td className="p-2">{item.Unit}</td>
                                    </tr> : " "
                                    }
                                    </> 
                                )
                            }) : ''}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <p>{bloodGroup}</p>
            <p>{isEmergency}</p> */}
        </div>

        
    )
}