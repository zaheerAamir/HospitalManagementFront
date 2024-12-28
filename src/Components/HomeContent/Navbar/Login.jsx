import { useState } from "react";
import PropTypes from "prop-types";
import { data, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = () => {
    const { onLogin } = useOutletContext(); // Access the onLogin prop
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/userLogin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok && data.Response.statusCode === 201) {
                const userInfo = data.result;
                localStorage.setItem("user", JSON.stringify(userInfo));
                onLogin(userInfo.name); // Pass the user's name to the parent component
                
                // Redirect to home page after login
                navigate("/"); // Redirect to home page
            } else {
                setError(data.Response.error || "Something went wrong");
            }
        } catch (err) {
            console.log(data);
            setError("Error connecting to the server. Please try again.", err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#FFF7E2]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-[#3A643B] mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-[#3A643B] text-white font-semibold py-2 rounded-md hover:bg-[#2c4c2b] transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;
