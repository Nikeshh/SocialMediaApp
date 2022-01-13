import React, { useEffect, useState } from 'react';
import { GoogleLogout } from 'react-google-login';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { client } from '../client';
import { userQuery } from '../utils/data';
import Spinner from './Spinner';
import { AiOutlineLogout } from 'react-icons/ai';

const UserProfile = () => {

    const { userId } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState();

    useEffect(() => {
        const query = userQuery(userId);
        client.fetch(query).then((data) => {
            setUser(data[0]);
        });
    }, [userId]);

    if(!user) {
        return <Spinner message="Loading Profile" />;
    }

    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className="relative pb-2 h-full justify-center items-center">
            <div className="flex flex-col pb-5">
                <div className="relative flex flex-col mb-7">
                    <div className="flex flex-col justify-center items-center">
                        <img
                            className="w-full h-370 2xl:h-510 shadow-lg object-cover"
                            src="https://source.unsplash.com/1600x900/?nature,photography,technology"
                            alt="user-pic"
                        />
                        <img
                            className="rounded-full w-20 h-20 -mt-10 shadow-xl object-cover"
                            src={user.image}
                            alt="user-pic"
                        />
                    </div>
                    <h1 className='font-bold text-3xl text-center mt-3'>
                        {user.userName}
                    </h1>
                    <div className='absolute top-0 z-1 right-0 p-2'>
                        {userId === User.googleId && (
                            <GoogleLogout
                                clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
                                render={(renderProps) => (
                                    <button
                                        type='button'
                                        className='bg-white p-2 rounded-full cursor-pointer outline-none shadow-md'
                                        onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                    >
                                        <AiOutlineLogout color="red" fontSize={21} />
                                    </button>
                                )}
                                onLogoutSuccess={logout}
                                cookiePolicy="single_host_origin"
                            />
                        )}
                    </div>
                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default UserProfile;