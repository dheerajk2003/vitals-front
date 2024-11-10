import { useState } from "react"


export default function UserDashboard(){

    const [credits, setCredits] = useState<number>(12);
    const [donations, setDonations] = useState<number>(5);

    return(
        <div className="w-full h-full bg-gray-100">
            <div className="flex items-center justify-start gap-5">
            <h1 className="m-5 font-semibold text-2xl">Credits : {credits}</h1>            
            <h1 className="m-5 font-semibold text-2xl">Donations : {donations}</h1>
            </div>
        </div>
    )

}