import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePosts from "../components/HomePosts";
import { useEffect, useState } from "react";
import { URL } from "../url";

const Home = () => {
    const [ news, setNews] = useState([]);
    const fetchNews = async () => {
        try {
            const res = await axios.get(URL + "/api/news/")
            // console.log(res.data)
            setNews(res.data);
            
        } catch (err) {
            console.log(err)
            
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>
            <Navbar />
            <div className="px-8 md:px-[200px]">
                {news.map((news) => (
                <HomePosts key = {news._id} news={news} />
                
                ))}
                
            </div>
            <Footer />
        </>
    )
}

export default Home;