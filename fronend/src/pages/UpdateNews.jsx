import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate, Navigate, useParams } from "react-router-dom";

export default function UpdateNews({ news }) {

    // let { id } = useParams();
    const { user } = useContext(UserContext);
    console.log(news);
    const [newNews, setNewNews] = useState({
        title: "",
        description: "",



    });
    const [file, setFile] = useState(null);
    const navigate = useNavigate();


    const handleChange = (e) => {
        setNewNews({ ...newNews, [e.target.name]: e.target.value })
    }

 
    const handleUpdate = async (e) => {
        e.preventDefault()
        
        // console.log(newNews)
        newNews.userId = user._id
        newNews.username = user.username
        // const news = newNews.find((n)=> {
        //     n._id === id;
        // });
        // try {
        await axios.put(URL + "/api/news/"+ newNews._id, newNews).then((res) => {
            console.log(res.data)
   
            navigate("/news/news/" + res.data._id);
        });
    }

    return(
        <div>
        <Navbar />
        <div className="px-6 md:px-[200px] mt-8">
            <h1 className="font-bold md:text-2xl text-xl ">Edit News</h1>
            <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
                <input onChange={handleChange} value={newNews.title} type="text" name="title" placeholder="Enter News Title" className="px-4 py-2 outline-none" />
                <input onChange={(e) => setFile(e.target.files[0])} type="file" className="px-4" />

                <textarea onChange={handleChange} value={newNews.description} name="description" rows={15} cols={30} className="px-4 py-2 outline-none" placeholder="Type News details" />
                <button onClick={handleUpdate} className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">Update</button>
            </form>

        </div>
        <Footer />
    </div>
    );
}