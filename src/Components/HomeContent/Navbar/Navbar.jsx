
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Make sure to import useNavigate here
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userName, setUserName] = useState(null);
    const navigate = useNavigate(); 

    // Check if the user is logged in or not when the component mounts or localStorage changes
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setUserName(user.name);  // Set the user name from localStorage
        } else {
            setUserName(null);  // If no user, clear the username state
        }
    }, []);  // Empty dependency array ensures this runs once when component mounts

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUserName(null);  // Remove the user name when logging out
        navigate("/login"); 
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#FFF7E2]">
            <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <NavLink to="/" className="text-[#3A643B]">
                        A M R U T A M
                    </NavLink>
                </div>
                <div className="hidden md:flex space-x-8 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:text-bold ${isActive ? "font-bold" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/find-doctor"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? "font-bold" : ""}`
                        }
                    >
                        Find Doctors
                    </NavLink>
                </div>
                <div className="hidden md:block text-lg">
                    {userName ? (
                        <div className="flex items-center space-x-4">
                            <span className="font-semibold text-[#3A643B]">{userName}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-[#3A643B] border ml-1 font-semibold text-white px-4 py-2 rounded-md transition duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="border border-black font-semibold text-[#3A643B] px-4 py-2 rounded-md transition duration-300"
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="bg-[#3A643B] border ml-1 font-semibold text-white px-4 py-2 rounded-md transition duration-300"
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <FiMenu size={24} />
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden flex flex-col space-y-4 py-4 px-4 bg-white shadow-lg text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? "font-bold" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/find-doctor"
                        className={({ isActive }) =>
                            `text-[#3A643B] hover:font-semibold ${isActive ? "font-bold" : ""}`
                        }
                    >
                        Find Doctors
                    </NavLink>
                    {userName ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-[#3A643B] font-semibold">{userName}</span>
                            <button
                                onClick={handleLogout}
                                className="bg-[#3A643B] border ml-1 font-semibold text-white px-4 py-2 rounded-md transition duration-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <NavLink
                            to="/login"
                            className="border border-black font-semibold text-[#3A643B] px-4 py-2 rounded-md transition duration-300"
                        >
                            Login
                        </NavLink>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
