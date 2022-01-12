import { IoIosArrowForward } from 'react-icons/io';

const Sidebar = ({ closeToggle, user }) => {

    const handleCloseSidebar = () => {
        if(closeToggle) {
            closeToggle(false);
        }
    }

    return(
        <div className="">
           <div className="">

           </div>
           {user && (
               <Link
                to={`user-profile/${user._id}`}
                className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3"
                onClick={handleCloseSidebar}
               >
                   <img src={user.image} className="w-10 h-10 rounded-full" alt="user-profile" />
                   <p>{user.userName}</p>
                   <IoIosArrowForward />
               </Link>
           )}
        </div>
    );
};

export default Sidebar;