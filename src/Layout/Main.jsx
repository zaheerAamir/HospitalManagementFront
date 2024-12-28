

import { Outlet } from 'react-router-dom';
import Navbar from '../Components/HomeContent/Navbar/Navbar';
import Footer from '../Components/HomeContent/Footer/Footer';

const Main = () => {

    const handleLogin = (userName) => {
        console.log("User Logged In:", userName);
    };

    return (
        <div>
            <Navbar />
            <Outlet context={{ onLogin: handleLogin }} />
            <Footer />
        </div>
    );
};

export default Main;