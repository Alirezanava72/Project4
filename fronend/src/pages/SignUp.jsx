import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";
import axios from "axios";
import { URL } from "../url";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate()

    const handleSignup = async () => {
        try {
          const res = await axios.post(URL + "/api/auth/signUp", { username, email, password });
          console.log(res.data)
          setUsername(res.data.username);
          setEmail(res.data.email);
          setPassword(res.data.password);
          setError(false);
          navigate("/login");

        } catch (err) {
          setError(true);
          console.log(err);
        }
      };

    return (
        <>
            <div className=" bg-black text-white flex items-center justify-between px-6 md:px-[200px] py-4">
                <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">School News</Link></h1>
                <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-blue-500 hover:bg-yellow-500 hover:text-white rounded-lg"><Link to="/login">LOGIN</Link></h3>
            </div>
            <div className="w-full flex items-center justify-center h-[70vh]">
                <div className="flex flex-col justify-center item-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-center">Create a new account</h1>
                    <input onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0 rounded-full" type="text" placeholder="Enter Your Username" />
                    <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0 rounded-full" type="text" placeholder="Enter Your Email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-none rounded-full" type="password" placeholder="Enter Your password" />
                    <button onClick={handleSignup} className="w-full px-4 py-3 text-lg font-bold text-white bg-black hover:bg-blue-500 hover:text-black rounded-full">Submit!</button>
                    {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>}
                    <div className="flex justify-center item-center space-x-4">
                        <p>Already registered?</p>
                        <p className="text-blue-500 hover:text-black"><Link to="/login">Login here!</Link></p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SignUp;