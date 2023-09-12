import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function UpdateNews() {
    return(
        <div>
        <Navbar />
        <div className="px-6 md:px-[200px] mt-8">
            <h1 className="font-bold md:text-2xl text-xl ">Edit News</h1>
            <form className="w-full flex flex-col space-y-4 md:space-y-8 mt-4">
                <input type="text" placeholder="Enter News Title" className="px-4 py-2 outline-none" />
                <input type="file" className="px-4" />

                <textarea rows={15} cols={30} className="px-4 py-2 outline-none" placeholder="Type News details" />
                <button className="bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg">Update</button>
            </form>

        </div>
        <Footer />
    </div>
    );
}