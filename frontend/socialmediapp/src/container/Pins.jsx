import { Route, Routes } from "react-router-dom";
import { PinDetail, Feed } from '../components';

const Pins = ({ user }) => {
    return (
        <div>
            <div>
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