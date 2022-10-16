import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';





const Home = () => {
    const {user} = useContext(AuthContext)
    console.log('context', user);

    return (
        <div>
            <h2>This Is Home Page{user?.email}</h2>
        </div>
    );
};

export default Home;