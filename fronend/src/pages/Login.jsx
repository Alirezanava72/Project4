import { Link, useNavigate } from "react-router-dom"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import axios from "axios"
import { URL } from "../url"
import { UserContext } from "../context/UserContext"

export default function Login() {


    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const {setUser}=useContext(UserContext);
    const navigate=useNavigate();

    const handleLogin=async()=>{
        try{
          const res=await axios.post(URL + "/api/auth/login", { email,password }, { withCredentials:true })
        //   console.log("res.data")
          setUser(res.data)
          navigate("/")
    
        }
        catch(err){
          setError(true)
          console.log(err)
    
        }

    }

    return (
        <>
            <div className=" bg-black text-white flex items-center justify-between px-6 md:px-[200px] py-4">
                <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">School News</Link></h1>
                <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-blue-500 hover:bg--500 hover:text-white rounded-lg"><Link to="/signUp">SIGNUP</Link></h3>
            </div>
            <div className="w-full flex items-center justify-center h-[70vh]">
                <div className="flex flex-col justify-center item-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-center">Log in your account</h1>
                    <input onChange={(e)=>setEmail(e.target.value)}  className="w-full px-4 py-2 border-2 border-black outline-0 rounded-full" type="text" placeholder="Enter Your email" />
                    <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-none rounded-full" type="password" placeholder="Enter Your password" />
                    <button onClick={handleLogin} className="w-full px-4 py-3 text-lg font-bold text-white bg-black hover:bg-blue-500 hover:text-black rounded-full">Log in</button>
                    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                    <div className="flex justify-center item-center space-x-4">
                        <p>Don't have an account?</p>
                        <p className="text-blue-500 hover:text-black"><Link to="/signUp">Sign Up Now!</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};