import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div>
            <div>
            <Header></Header> 
            <Outlet></Outlet> 
            <Toaster/>      
          </div>
       
        </div>
    );
};

export default Root;