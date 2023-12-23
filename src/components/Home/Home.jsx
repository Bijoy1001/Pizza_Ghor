import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Home = () => {

    const [card, setCard] =useState([]);

    useEffect (() => {
        fetch ('cardDetail.json')
        .then(res => res.json())
        .then(data => setCard(data));
    }, []) 


    return (
        <div className="bg-[#242327]">
           <div>
           <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/chSCQRY/1.png" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/VNZY4P4/2.png" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/4J6chKq/3.png" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                  <img src="https://i.ibb.co/2dR0mvT/4.png" className="w-full" />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                </div>
              </div>
           </div>


        <div className="flex justify-center items-center">
          <h1 className="pt-16 text-6xl font-bold text-white">Our all pizza</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {
               card.map(card => <Card key={card.id} card={card}></Card>) 
            }
        </div>
        <div className="flex justify-center items-center gap-8 text-white mt-10">
            <div>
                <h1 className="text-4xl font-bold mt-8">Contact Information</h1>
                 <h2 className="text-xl mt-4">Address</h2>
                 <p className="mt-2">House #6767, Avenue #445, Poas #776, postal_code #1000, Division: Dhaka</p>
                 <h2 className="text-xl mt-4">Phone</h2>
                 <p className="mt-2">017169314**</p>
                 <p>sahariar2015402115@bsdi-bd.org</p>
            </div>
            <div className="col-12 col-lg-6">
            <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Shohid%20Noor%20Hossain%20Square,%20Dhaka%201000&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> 

            </div>
        </div>
    
         <div className="pt-4">
            <Footer></Footer>
         </div>
     
      </div>
            
     
    );
};

export default Home;