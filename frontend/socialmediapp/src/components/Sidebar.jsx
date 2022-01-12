import { IoIosArrowForward } from 'react-icons/io';

const Sidebar = ({ closeToggle, user }) => {
    return(
        <div className="">
           <div className="">

           </div>
           {user && (
               <Link
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