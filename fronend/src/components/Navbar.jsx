import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const [prompt,setPrompt] = useState("");
    const [menu, setMenu] = useState(false);
    const navigate = useNavigate();
    const path = useLocation().pathname;

    // console.log(prompt)

    const showMenu=() => {
        setMenu(!menu)}

    const {user} = useContext(UserContext);
    // console.log(user)
    return (

        <div className="bg-yellow-600 text-white flex items-center justify-between px-6 md:px-[200px] py-4">
            <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">School News</Link></h1>
            {/* to show the search bar only in ALL NEWS page not newsDatail page */}
            {path==="/" && <div className="flex justify-center items-center space-x-0">
                <p onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="cursor-pointer"><FaSearch /></p> 
                <input onChange={(e)=>setPrompt(e.target.value)} className="text-black border-2 border-grey outline-2 px-3" placeholder="Search here" type="text" />

            </div>}
            <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
                {user ? <h3><Link to="/write">Craete News</Link></h3> : <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-pink-500 hover:bg-yellow-500 hover:text-white rounded-lg"><Link to="/login">LOGIN</Link></h3>}
                {user ? 
                <div onClick={showMenu}>
                    <p className="cursor-pointer relative" ><FaBars /></p>
                    {menu && <Menu />}
                </div>
                 : <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-blue-500 hover:bg-yellow-500 hover:text-white rounded-lg"><Link to="/signUp">SIGNUP</Link></h3>}
            </div>

            <div onClick={showMenu} className="md:hidden text-lg">
                <p className="cursor-pointer relative" ><FaBars /></p>
                {menu && <Menu />}
            </div>
        </div>

    )
}

export default Navbar;

