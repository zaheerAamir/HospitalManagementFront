import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import { FaArrowRight, FaGraduationCap, } from "react-icons/fa";
import cardProfile from "../../../assets/group.jpg";

const MeetExpert = () => {
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]); 

    useEffect(() => {
        fetch("http://localhost:8080/getAvailableDoctors")
            .then((response) => response.json())
            .then((data) => {
                if (data.result) {
                    setDoctors(data.result); 
                }
            })
            .catch((error) => console.error("Error fetching doctors:", error));
    }, []);

    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-12 text-green-800 mb-5">
                Meet our Ayurveda experts
            </h1>
            <div className="md:flex items-center justify-between md:px-0 px-5">
                
                {doctors.slice(0, 3).map((doctor, index) => (
                    <div key={index} className="bg-[#fdf6e9] rounded-[30px] border border-gray-400 md:w-[290px] mt-12">
                        <div className="flex flex-col items-center my-8 m-6 space-y-2">
                            <div className="relative">
                                <img
                                    src={cardProfile}
                                    alt="Doctor profile"
                                    className="w-32 h-32 rounded-full object-cover"
                                />
                            </div>
                            <h2 className="text-2xl font-semibold mt-3">{doctor.name}</h2>
                            <p>Email: {doctor.email}</p>
                            <p className="flex items-center gap-2">
                                <FaGraduationCap className="text-2xl" /> 25 years of experience
                            </p>
                            
                        </div>
                        
                    </div>
                ))}

            </div>
            <div className="w-56 mx-auto my-10 text-lg font-bold">
                <button className="py-3 px-5 rounded-md bg-gray-200 flex items-center gap-3" onClick={() => navigate("/find-doctor")}>
                    Find more expert <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default MeetExpert;
