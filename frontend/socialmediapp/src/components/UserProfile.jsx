import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../client';
import { userQuery } from '../utils/data';
import Spinner from './Spinner';

const UserProfile = () => {

    const { userId } = useParams();

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

    return (
        <div className="relative pb-2 h-full justify-center items-center">
            <div className="">
                <div className="">
                    <div className="">
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