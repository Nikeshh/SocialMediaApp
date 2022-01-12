import { useEffect, useRef, useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {

    const [user, setUser] = useState();
    const scrollRef = useRef(null);

    const userInfo = localStorage.getItem('user') !=='undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();
    
    useEffect(() => {
        // Todo: Fetch user query and set the user
    }, []);

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
    });

    return (
        <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <Sidebar user={user && user} />
            </div>
            <div className="">

            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Home;