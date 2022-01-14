import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { PinDetail, Feed, Navbar } from '../components';

const Pins = ({ user }) => {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user && user} />
            </div>
            <div className="h-full">
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Pins;