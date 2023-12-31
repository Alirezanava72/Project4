import { RiFileEditLine } from "react-icons/ri"
import { MdDelete } from "react-icons/md"

export default function Comments() {
    return(
        <div className="px-2 py-2 bg-gray-200 rounded-lg my-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-gray-500">@Alireza</h3>
                            <div className="flex justify-center items-center space-x-4">
                                <p className="text-gray-500 text-sm">Fri Sep 15 2023</p>
                                <p className="text-gray-500 text-sm">10:48</p>
                                <div className="flex items-center justify-center space-x-2">
                                    {/* Edit and Delete icons for comments */}
                                    <p className="text-xl"><RiFileEditLine /></p>
                                    <p className="text-xl"><MdDelete /></p>
                                </div>
                            </div>
                        </div>
                        {/* the actual comment */}
                        <p className="px-4 mt-2">Very nice! 👍🏻</p>
                        
                    </div>
    );
}