import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const SignUp = () => {
    return (
        <>
            <div className=" bg-black text-white flex items-center justify-between px-6 md:px-[200px] py-4">
                <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">School News</Link></h1>
                <h3 className="px-4 py-2 text-lg font-bold text-green-300 bg-blue-500 hover:bg-yellow-500 hover:text-white rounded-lg"><Link to="/login">LOGIN</Link></h3>
            </div>
            <div className="w-full flex items-center justify-center h-[70vh]">
                <div className="flex flex-col justify-center item-center space-y-4 w-[80%] md:w-[25%]">
                    <h1 className="text-xl font-bold text-center">Create a new account</h1>
                    <input className="w-full px-4 py-2 border-2 border-black outline-0 rounded-full" type="text" placeholder="Enter Your Username" />
                    <input className="w-full px-4 py-2 border-2 border-black outline-0 rounded-full" type="text" placeholder="Enter Your Email" />
                    <input className="w-full px-4 py-2 border-2 border-black outline-none rounded-full" type="password" placeholder="Enter Your password" />
                    <button className="w-full px-4 py-3 text-lg font-bold text-white bg-black hover:bg-blue-500 hover:text-black rounded-full">Submit!</button>
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