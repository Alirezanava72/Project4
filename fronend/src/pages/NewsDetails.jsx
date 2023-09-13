import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RiFileEditLine } from "react-icons/ri"
import { MdDelete } from "react-icons/md"
import Comments from "../components/comments";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";


export default function NewsDetails() {
    const newsId = useParams().id;
    const [news, setNews] = useState({});
    const {user} = useContext(UserContext);

    const fetchNews = async() => {

        try {
            const res = await axios.get(URL + "/api/news/" + newsId)
            setNews(res.data);

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchNews()
    }, [newsId])

    return (
        <div>
            <Navbar />
            <div className="px-8 md:px-[200px] mt-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-black md:text-3xl">{news.title}</h1>
                    {user?._id === news?.userId && <div className="flex items-center justify-center space-x-2">
                        {/* Edit and Delete icons for News details */}
                        <p className="text-xl"><RiFileEditLine /></p>
                        <p className="text-xl"><MdDelete /></p>
                    </div>}
                </div>
                {/*  */}
                <div className="flex item-center justify-between mt-2 md:mt-4">
                    <p>@{news.username}</p>
                    <div className="flex space-x-2">
                        <p>{new Date(news.updatedAt).toString().slice(0,15)}</p>
                        <p>{new Date(news.updatedAt).toString().slice(16,21)}</p>
                    </div>
                </div>
                <img src={news.photo} alt="" className="w-full mx-auto mt-8" />
                <br />
                <p className="mx-auto text-sm md:text-lg">{news.description}</p>

                {/* Comment section */}
                <div className="flex flex-col mt-4">
                    <h3 className="mt-4 mb-4 font-semibold ">Comments:</h3>
                    <Comments />


                </div>
                {/* write a comment  */}
                <div className="w-full flex flex-col mt-4 md:flex-row">
                    <input className="md:w-[80%] outline-none py-2 px-4 mt-4 md:mt-0" type="text" placeholder="write a comment" />
                    <button className="bg-black text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>

                </div>
            </div>
            <Footer />
        </div>
    );

}