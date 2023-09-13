import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePosts from "../components/HomePosts";
import { useEffect, useState } from "react";
import { URL } from "../url";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Home = () => {
    const { search } = useLocation();
    const [news, setNews] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const {user} = useContext(UserContext)

    // console.log(user)

    const fetchNews = async () => {
        try {
            const res = await axios.get(URL + "/api/news/" + search);

            setNews(res.data);

            if (res.data.length === 0) {
                setNoResults(true);
            }
            else {
                setNoResults(false);
            }



        } catch (err) {
            console.log(err)

        }
    };

    useEffect(() => {
        fetchNews();
    }, [search]);

    return (
        <>
            <Navbar />
            <div className="px-8 md:px-[200px] min-h-[80vh]">
                {!noResults ? news.map((news) => (

                    <Link to = {user ? `/news/news/${news._id}` : "/login"}>
                        <HomePosts key={news._id} news={news} />
                    </Link>

                )) : <h3 className="flex justify-center items-center mt-16">Nothing found for "{search && search.replace('?search=', '')}" !</h3>}

            </div>
            <Footer />
        </>
    )
}

export default Home;