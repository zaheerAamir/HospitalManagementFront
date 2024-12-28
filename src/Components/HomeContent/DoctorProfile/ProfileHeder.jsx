import { FaStar } from "react-icons/fa";
import cover from ".././../../assets/profilecover.png"
import profile from ".././../../assets/profile.png"

const ProfileHeder = () => {
    return (
        <div className=" bg-white rounded-lg shadow-sm mt-12 border">
            <div className="relative">
                {/* Background Pattern */}
                <div className="h-24 rounded-t-lg">
                    <img
                        src={cover}
                        alt="Doctor profile"
                        className="w-full h-32 rounded-t-lg object-cover  border-white shadow-sm"
                    />
                </div>

                {/* Profile Content */}
                <div className="px-6 pb-6 bg-[#FFFBF2]">
                    {/* Profile Image and Basic Info */}
                    <div className="md:flex items-start">
                        <div className="relative">
                            <img
                                src={profile}
                                alt="Doctor profile"
                                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-sm"
                            />
                        </div>
                        <div className="ml-4 mt-12 md:flex items-center">
                            <div>
                                <div className="flex items-center">
                                    <h2 className="text-xl font-semibold text-gray-800">Dr. Bruce Willis</h2>
                                    <svg className="w-5 h-5 ml-2 text-white bg-blue-700 rounded-full" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-600">Gynecologist</p>
                                    <div className="flex items-center mt-1 gap-1">
                                        <span className="text-gray-700 font-medium">4.2</span>
                                        <div className="flex items-center gap-1 text-[#F79624]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Stats */}
                            <div className="md:flex justify-between items-center mt-6 md:ml-20">
                                <div className="flex space-x-20">
                                    <div className="text-center">
                                        <div className=" text-gray-600">Followers</div>
                                        <div className="text-lg font-bold text-gray-800">850</div>
                                    </div>
                                    <div className="text-center">
                                        <div className=" text-gray-600">Following</div>
                                        <div className="text-lg font-bold text-gray-800">18K</div>
                                    </div>
                                    <div className="text-center">
                                        <div className=" text-gray-600">Posts</div>
                                        <div className="text-lg font-bold text-gray-800">250</div>
                                    </div>
                                    <button className="bg-green-700 text-white text-lg px-8 py-2 rounded-lg hover:bg-green-800 transition-colors hidden md:block">
                                        Book an Appointment
                                    </button>
                                </div>

                            </div>
                            <button className="bg-green-700 text-white text-lg px-8 py-2 rounded-lg hover:bg-green-800 transition-colors md:hidden sm:block mt-5 w-full">
                                Book an Appointment
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProfileHeder;