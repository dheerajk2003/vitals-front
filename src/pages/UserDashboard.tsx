import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function UserDashboard(){

    const navigate = useNavigate();

    const [credits, setCredits] = useState<number>(12);

    type request = {
        AcceptedBy:{
            Valid: boolean
            Int64: number
        }
        Id: number,
        BloodGroup: string
        Type: number
        Unit: number
    }

    const [requests, setRequests] = useState<request[]>([]);
    // const [accReq, setAccReq] = useState<request[]>([]);

    useEffect(() => {
        if(!localStorage.getItem("usertoken")){
            navigate("/userlogin");
        }
        getcredits();
        getRequests();
        // getAcceptedRequests();
    },[])

    async function getcredits(){
        const responce = await fetch("http://localhost:8080/donator/getCredits",{
            method: "GET",
            headers: {
                "X-TOKEN": `${localStorage.getItem("usertoken")}`
            }
        })
        console.log(responce);
        const data = await responce.json();
        if(data){
            setCredits(data.credits);
        }
    }

    async function getRequests(){
        const responce = await fetch("http://localhost:8080/donator/requests", {
            method: "GET",
            headers: {
                "X-TOKEN": `${localStorage.getItem("usertoken")}`
            }
        })
        const data = await responce.json();
        setRequests(data.requests);
        console.log(data);
    }

    // async function getAcceptedRequests(){
    //     const responce = await fetch("http://localhost:8080/donator/accepted_requests", {
    //         method: "GET",
    //         headers: {
    //             "X-TOKEN": `${localStorage.getItem("usertoken")}`
    //         }
    //     })
    //     const data = await responce.json();
    //     setAccReq(data.requests);
    // }

    async function Accept(e:any, id: number){
        // e.preventDefault();
        const responce = await fetch(`http://localhost:8080/donator/acceptRequest?id=${id}`,{
            method: "GET",
            headers:{
                "X-TOKEN": `${localStorage.getItem("usertoken")}`
            }
        })
        if(responce.status == 200){
            getRequests();
            getcredits();
        }
        else{
            alert("Failed")
        }
    }

    return(
        <div className=" min-h-screen bg-gray-100 p-8 pt-24">
            <div className="flex items-center justify-start gap-5 rounded-3xl shadow bg-white">
                <h1 className="m-5 font-semibold text-2xl">Credits : {credits}</h1>
            </div>

            <div className="mt-12 shadow p-5 rounded-xl bg-white">
                <h1 className="mb-5 ml-2 font-semibold text-2xl">Blood Requirement</h1>
                <div>
                    <table className="w-full mt-12">
                        <thead>
                            <tr>
                                <th className="text-left">Blood Group</th>
                                <th className="text-left">Unit</th>
                                <th className="text-left">Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(requests != null) ? requests.map((item) => {
                                return(
                                    <tr>
                                        <td className="p-2">{item.BloodGroup}</td>
                                        <td className="p-2">{item.Unit}</td>
                                        <td className="p-2">{(item.Type > 0) ? "Emergency" : "General"}</td>
                                        <td className="p-2">{
                                            <button type="submit" onClick={(e) => Accept(e,item.Id)} className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Accept</button>   
                                        }</td>
                                    </tr>  
                                )
                            }) : " "}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}