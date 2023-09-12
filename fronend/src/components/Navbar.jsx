import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const user =false;
    return (

        <div className="bg-yellow-600 text-white flex items-center justify-between px-6 md:px-[200px] py-4">
            <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">School News</Link></h1>
            <div className="flex justify-center items-center space-x-0">
                <p><FaSearch /></p>
                <input className="border-4 border-grey outline-2 px-3" placeholder="Search here" type="text" />

            </div>
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
                { user ? <h2><Link to="/Create">Create</Link></h2> : <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-pink-500 hover:bg-yellow-500 hover:text-white rounded-lg"><Link to="/login">LOGIN</Link></h3> }
                {user ? <h2>Profile</h2> : <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-blue-500 hover:bg-yellow-500 hover:text-white rounded-lg"><Link to="/signUp">SIGNUP</Link></h3>}
            </div>
            
        </div>

    )
}

export default Navbar;

