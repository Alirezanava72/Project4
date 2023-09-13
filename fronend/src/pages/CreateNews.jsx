import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext";
import { URL } from "../url";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

export default function CreateNews() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleCreate = async (e) => {
        console.log("hello")
        e.preventDefault()
        const news = {
            title,
            description,
            username: user.username,
            userId: user._id,
        }
        if (file) {
            const data = new FormData()
            const filename = Date.now() + file.name 
            data.append("img", filename)
            data.append("file", file)
            news.photo = filename


            // photo uploading
            try {
                const imgUpload = await axios.post(URL + "/api/upload", data)
                // console.log(imgUpload.data)
            }
            catch (err) {
                console.log(err)
            }
        }

        // News craetion 

        // console.log(news)
        try {
            const res = await axios.post(URL + "/api/news/create", news, { withCredentials: true });
            navigate("/news/news/" + res.data._id);
            // console.log(res.data)

        }
        catch (err) {
            console.log(err)
        }


    }

    return (
        <div>
            <Navbar />
            <div className="px-6 md:px-[200px] mt-8">
                <h1 className="font-bold md:text-2xl text-xl ">Create News</h1>
                <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
                    <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter News Title" className="px-4 py-2 outline-none" />
                    <input onChange={(e) => setFile(e.target.files[0])} type="file" className="px-4" />

                    <textarea onChange={(e) => setDescription(e.target.value)} rows={15} cols={30} className="px-4 py-2 outline-none" placeholder="Type News details" />
                    <button onClick={handleCreate} className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">Create</button>
                </form>
            </div>
            <Footer />
        </div>
    )

    // const handleCreate = async (e) => {
    //     console.log("hi")
    //     e.preventDefault();

    //     const news = {
    //         title,
    //         description,
    //         username: user.username,
    //         userId: user._id,
    //     };

    //     try {

    //         if (file) {
    //             const data = new FormData();
    //             console.log(data)
    //             const filename = `${Date.now()}-${file.name}`;
    //             console.log(filename)
    //             data.append("name", filename);
    //             data.append("file", file);
    //             news.photo = filename;

    //             await axios.post(URL + "/api/upload", data);
    //         }

    //         const res = await axios.post(URL + "/api/news/create", news, {
    //             withCredentials: true,

    //         });
    //         console.log(res)
    //         navigate(`/news/news/${res.data._id}`);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // return (
    //     <div>
    //         <Navbar />
    //         <div className="px-6 md:px-[200px] mt-8">
    //             <h1 className="font-bold md:text-2xl text-xl">Create News</h1>
    //             <form onSubmit={handleCreate} className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
    //                 <input
    //                     onChange={(e) => setTitle(e.target.value)}
    //                     type="text"
    //                     placeholder="Enter News Title"
    //                     className="px-4 py-2 outline-none"
    //                 />
    //                 <input
    //                     onChange={(e) => setFile(e.target.files[0])}
    //                     type="file"
    //                     className="px-4"
    //                 />
    //                 <textarea
    //                     onChange={(e) => setDescription(e.target.value)}
    //                     rows={15}
    //                     cols={30}
    //                     className="px-4 py-2 outline-none"
    //                     placeholder="Type News details"
    //                 />
    //                 <button type="submit" className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">
    //                     Create
    //                 </button>
    //             </form>
    //         </div>
    //         <Footer />
    //     </div>
    // );

};

