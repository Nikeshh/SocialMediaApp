import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {

    const navigate = useNavigate();

    if(user) {
        return (
            <div>
                Navbar with given user
            </div>
        );
    }

    return null;
};

export default Navbar;