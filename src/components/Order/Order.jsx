import { useEffect, useState } from "react";
import DonationCard from "./OrderCard";




const Order = () => {
   
    const [donation, setDonations] = useState ([]);
    const [noFound, setNofound] = useState(false);
    const [dataLength, setDataLength] = useState (4);

    useEffect (()=>{
        const DonationItems = JSON.parse(localStorage.getItem('donation'));
      
        if(DonationItems){
            setDonations(DonationItems);
        }

        else {
            setNofound ("No Data Found");
        }
       
    },[]);

     console.log(donation);

     const handleRemove = () => {
        localStorage.clear()
        setDonations([])
        setNofound ("No Data Found");
     }


    return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
     : 
     <div>

        <div className=" flex justify-end items-end m-8 pt-4">
          {donation.length > 0 && <button onClick={handleRemove} className="btn btn-primary text-white">Delete All</button>}
        </div>

        <div className="grid grid-cols-2 gap-4 mt-20">
            {donation.slice(0, dataLength).map(show => <DonationCard key={show.id} show={show}></DonationCard>)}
        </div>

        <div className={dataLength === donation.length && 'hidden'}>
            <div className="flex items-center justify-center mt-2 ">
            <button onClick={() => setDataLength(donation.length)} 
             className="btn btn-primary text-white"
            >Show All
            </button>
            </div>
        </div>
        
    </div>}</div>;

   
};

export default Order;