import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShowDetail = () => {
 

    const heldleClick = ()  => {
       
      // console.log(show);
      const addedDonation = [];
      const DonationItems = JSON.parse(localStorage.getItem('donation'));

      if(!DonationItems) {
        addedDonation.push(show);
        localStorage.setItem('donation', JSON.stringify(addedDonation));
        toast('Your Donation is successfull');
      }

      else{
          const isExits = DonationItems.find(show => show.id == id)
          
          if(!isExits){
            addedDonation.push(...DonationItems, show)
            localStorage.setItem('donation', JSON.stringify(addedDonation));
            toast('Your Order is successfull');
          }
          
          else{
            toast('Allready Orderd');
          }
       
      }
    }

  

    const [show, setShow] = useState({});
    const {id} = useParams();
 
    const Show = useLoaderData();

   
    useEffect(() => {
        const findshow = Show?.find((Show) => Show.id == id);
        setShow(findshow);
    },[id,Show]);
     
    // console.log(show);
    return (
        <div className="mt-20">
          <div className="card w-full">
            <figure><img className="w-[1320px] h-[700px] rounded-3xl" src={show.detail_pic} alt="Shoes" /></figure>
            </div>
           <div className="flex justify-center items-center">
              <div>
                    <div>
                      <button onClick={heldleClick} className="btn relative mt-4 text-white" style={{backgroundColor: show.text_color}}>Order Now</button>
                  </div>
                  <div>
                      
                      <h1 className="text-3xl font-bold mt-8">{show.title}</h1>
                      <p className="mt-4">{show.description}</p>
                  </div>
              </div>
              <div>
                   <div>
                    
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      
                      <div>
                       <h1 className="text-2xl font-bold pl-8 mt-16">Please inter this information</h1>
                        <form className="card-body">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Your Name</span>
                            </label>
                            <input type="name" placeholder="Name" name="name" className="input input-bordered" required />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Phone Number</span>
                            </label>
                            <input type="phone" placeholder="Phone Number" name="phone" className="input input-bordered" required />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" placeholder="Email Address" name="email" className="input input-bordered" required />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text">Address</span>
                            </label>
                            <textarea type="address" placeholder="address" name="address" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
                          </div>
                      
                        </form>
                      </div>
                    </div>
                  </div> 
              </div>
           </div>
            <ToastContainer />
         </div>
    );
};

export default ShowDetail;