import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../url";
import { Link } from "react-router-dom";


export default function Menu () {
    const {user}=useContext(UserContext)
    const {setUser}=useContext(UserContext)
 

    const handleLogout = async() => {
        try {
            const res = await axios.get( URL+"/api/auth/logout", { withCredentials:true });
             console.log(res)
            setUser(null)

        } catch (err) {
            console.log(err)

        }
    }
    return (
        <div className="bg-black w-[200px] z-10 flex flex-col items-start absolute top-12 right-6 md:right-32 rounded-md p-4 space-y-4">
             {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/login">LOGIN</Link></h3>}
             {!user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/signUp">SIGNUP</Link></h3>}
             {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/write">Write</Link></h3>}
             {user && <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer"><Link to="/">My News</Link></h3>}
             {user && <h3 onClick={handleLogout} className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>}
        </div>
    );

}