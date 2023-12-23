import { NavLink } from "react-router-dom";

const Header = () => {

    const links = <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/order'>Order</NavLink></li>
      <li><NavLink to='/login'>Login</NavLink></li>
    </>
   
    return (
        <div className="navbar bg-[#242327]">
        <div className="flex-1">
          <img className="w-16" src="https://i.ibb.co/qrbsJ5j/logo-no-background.png" alt="" />
        </div>
        <div className="flex-none text-white">
          <ul className="menu menu-horizontal px-1">
            {links}
            <li>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Header; 