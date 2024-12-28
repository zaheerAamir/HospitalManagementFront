import { FaFacebookF, FaInstagram, FaStar, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdDateRange, MdHomeWork } from "react-icons/md";
import reviewProfile from "../../../assets/reviewProfile.jpeg"
import { useState } from "react";
import { CgGirl } from "react-icons/cg";
import { LuShieldPlus } from "react-icons/lu";
import { GiHairStrands } from "react-icons/gi";

const ProfileContent = () => {
    const [selectedSession, setSelectedSession] = useState('video');
    return (
        <div>
            <div className="md:flex space-x-8 mt-12">
                {/* First Column */}
                <div className="md:w-1/2 space-y-5">
                    <div className="rounded-2xl border border-gray-300">
                        <div className="flex items-center justify-between py-3 px-5 bg-gray-100 rounded-t-lg">
                            <h2 className="text-xl font-bold">A Little About me</h2>
                            <button className="py-2 text-lg px-4 rounded-lg border border-gray-500">Follow +</button>
                        </div>
                        <p className="p-5">Hello I am Dr. Bruce Willis a Gynecologists in Sanding Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynecologists Medicine from the </p>
                        <hr />
                        <div className="space-y-4 p-5 ">
                            <div className="md:flex items-center gap-5 space-y-2">
                                <h2 className="text-xl font-bold">Language Spoken </h2>
                                <h2 className="text-xl bg-gray-100 py-2 px-4 rounded-md cursor-pointer">English</h2>
                                <h2 className="text-xl bg-gray-100 py-2 px-4 rounded-md cursor-pointer">Hindi</h2>
                                <h2 className="text-xl bg-gray-100 py-2 px-4 rounded-md cursor-pointer">Telugu</h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <h2 className="text-xl bg-gray-100 p-3 rounded-full border border-gray-400 hover:border-gray-900 cursor-pointer"><FaFacebookF /></h2>
                                <h2 className="text-xl bg-gray-100 p-3 rounded-full border border-gray-400 hover:border-gray-900 cursor-pointer"><FaInstagram /></h2>
                                <h2 className="text-xl bg-gray-100 p-3 rounded-full border border-gray-400 hover:border-gray-900 cursor-pointer"><FaYoutube /></h2>
                                <h2 className="text-xl bg-gray-100 p-3 rounded-full border border-gray-400 hover:border-gray-900 cursor-pointer"><FaTwitter /></h2>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-300">
                        <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                            <h2 className="text-xl font-bold">I Specialize In</h2>
                        </div>
                        <p className="p-5">Hello I am Dr. Bruce Willis a Gynecologists in Sanding Hospital Surat. love to work with all my hospital staff and senior doctors. Completed my graduation in Gynecologists Medicine from the </p>
                        <hr />
                        <div className="space-y-4 p-5 ">

                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="p-3 w-20 h-16 flex items-center justify-center rounded-md bg-[#FFFCF2] border border-gray-400">
                                        <h2 className="text-3xl rounded-full  hover:border-gray-900 cursor-pointer"><CgGirl /></h2>
                                    </div>
                                    <h1>Women’s Health</h1>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="p-3 w-20 h-16 flex items-center justify-center rounded-md bg-[#FFFCF2] border border-gray-400">
                                        {/* <h2 className="text-3xl "><CgGirl /></h2> */}
                                        <img src={reviewProfile} alt="" className="rounded-full w-10 h-10 hover:border-gray-900 cursor-pointer object-cover"/>
                                    </div>
                                    <h1>Women’s Health</h1>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="p-3 w-20 h-16 flex items-center justify-center rounded-md bg-[#FFFCF2] border border-gray-400">
                                        <h2 className="text-3xl rounded-full  hover:border-gray-900 cursor-pointer"><LuShieldPlus /></h2>
                                    </div>
                                    <h1>Women’s Health</h1>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <div className="p-3 w-20 h-16 flex items-center justify-center rounded-md bg-[#FFFCF2] border border-gray-400">
                                        <h2 className="text-3xl rounded-full  hover:border-gray-900 cursor-pointer"><GiHairStrands /></h2>
                                    </div>
                                    <h1>Women’s Health</h1>
                                </div>
                              

                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-300">
                        <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                            <h2 className="text-xl font-bold">The Concerns I Treat</h2>
                        </div>
                        <div className="p-5">
                            <div className="flex flex-wrap items-center gap-5">
                                <h2 className="text-lg bg-gray-100 py-2 px-4 rounded-full cursor-pointer">Skin Treatment</h2>
                                <h2 className="text-lg bg-gray-100 py-2 px-4 rounded-full cursor-pointer">Pregnancy</h2>
                                <h2 className="text-lg bg-gray-100 py-2 px-4 rounded-full cursor-pointer">Period Doubts</h2>
                                <h2 className="text-lg bg-gray-100 py-2 px-4 rounded-full cursor-pointer">Endometriosis</h2>
                                <h2 className="text-lg bg-gray-100 py-2 px-4 rounded-full cursor-pointer">Pelvic Pain</h2>
                                <h2 className="text-lg bg-gray-100 py-2 px-4 rounded-full cursor-pointer">+ 5 More</h2>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-300">
                        <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                            <h2 className="text-xl font-bold">My Work Experience</h2>
                        </div>
                        <h1 className="p-5 text-2xl text-green-800 font-bold">I have been in practice for : 7+ Years</h1>
                        <hr />
                        <div className="space-y-4 p-5 mr-10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <MdHomeWork className="p-2 bg-gray-200 rounded-md text-5xl text-purple-600" />
                                    <div>
                                        <h1 className="font-bold text-lg">Midtown Medical Clinic</h1>
                                        <p>Senior doctor</p>
                                    </div>
                                </div>
                                <p className="text-lg">2016-Present</p>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-4">
                                    <MdHomeWork className="p-2 bg-gray-200 rounded-md text-5xl text-purple-600" />
                                    <div>
                                        <h1 className="font-bold text-lg">Midtown Medical Clinic</h1>
                                        <p>Senior doctor</p>
                                    </div>
                                </div>
                                <p className="text-lg">2010-2015</p>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-gray-300">
                        <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                            <h2 className="text-xl font-bold">Featured Reviews (102)</h2>
                        </div>
                        <div className="space-y-5 p-5">
                            <div className="space-y-4 bg-gray-100 py-3 px-5 rounded-2xl">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src={reviewProfile} alt="" className="w-14 h-14 rounded-full object-cover"/>
                                        <div>
                                            <h1 className="font-semibold text-lg">Ancient Hightower</h1>
                                            <p>Consulted for Skin care</p>
                                        </div>
                                    </div>
                                    <p className="text-lg">20 January 2023</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-1 text-[#F79624]">
                                        <FaStar />   <FaStar /> <FaStar />  <FaStar />  <FaStar />
                                    </div>
                                    <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                               </div>
                            </div>
                            <div className="space-y-4 bg-gray-100 py-3 px-5 rounded-2xl">
                                <div className="flex justify-between">
                                    <div className="flex items-center gap-4">
                                        <img src={reviewProfile} alt="" className="w-14 h-14 rounded-full object-cover"/>
                                        <div>
                                            <h1 className="font-semibold text-lg">Ancient Hightower</h1>
                                            <p>Consulted for Skin care</p>
                                        </div>
                                    </div>
                                    <p className="text-lg">20 January 2023</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-1 text-[#F79624]">
                                        <FaStar />   <FaStar /> <FaStar />  <FaStar />  <FaStar />
                                    </div>
                                    <p>Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Column */}
                <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-lg border border-gray-300">
                        {/* Appointment Fee */}
                        <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-6 text-lg font-bold">
                            <span className="text-gray-800">Appointment Fee</span>
                            <span className="text-green-800">₹699.00</span>
                        </div>

                        {/* Session Mode Selection */}
                        <div className="mb-6">
                            <div className="flex items-center gap-4">
                                <h3 className="text-gray-800 text-xl font-bold mb-3">Select your mode of session</h3>
                                <h1 className="border border-gray-400 w-[200px]"></h1>
                           </div>
                            <div className="md:flex md:space-x-6 space-x-0 space-y-2 text-lg">
                                <button
                                    className={`px-10 py-3 rounded-lg flex flex-col items-center ${selectedSession === 'clinic'
                                            ? 'bg-green-200 text-green-800'
                                            : 'border border-gray-300'
                                        }`}
                                    onClick={() => setSelectedSession('clinic')}
                                >
                                    <span className="font-medium">In-Clinic</span>
                                    <span className="text-sm text-gray-500">45 Mins</span>
                                </button>

                                <button
                                    className={`px-10 py-3 rounded-lg flex flex-col items-center ${selectedSession === 'video'
                                            ? 'bg-green-200 text-green-800'
                                            : 'border border-gray-300'
                                        }`}
                                    onClick={() => setSelectedSession('video')}
                                >
                                    <span className="font-medium">Video</span>
                                    <span className="text-sm text-gray-500">45 Mins</span>
                                </button>

                                <button
                                    className={`px-10 py-3 rounded-lg flex flex-col items-center ${selectedSession === 'chat'
                                            ? 'bg-green-200 text-green-800'
                                            : 'border border-gray-300'
                                        }`}
                                    onClick={() => setSelectedSession('chat')}
                                >
                                    <span className="font-medium">Chat</span>
                                    <span className="text-sm text-gray-500">10 Mins</span>
                                </button>
                            </div>
                        </div>

                        {/* Date Selection */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4 text-lg">
                                <h3 className="text-gray-800 font-bold">Pick a time slot</h3>
                                <h1 className="border border-gray-400 w-[300px]"></h1>
                                <MdDateRange className="w-12 h-12 p-2 border border-gray-300 rounded-full text-gray-600" />                               
                            </div>

                            <div className="relative flex items-center mb-6">
                                <button className="absolute left-0 text-gray-400">
                                    <span className="sr-only">Previous</span>
                                    ◀
                                </button>

                                <div className="flex justify-between flex-grow px-8">
                                    <button className="px-4 py-2 border border-gray-500 bg-green-50 rounded-md">
                                        <div className="text-lg font-medium">Mon, 10 Oct</div>
                                        <div className="text-green-600">10 slots</div>
                                    </button>

                                    <button className="px-4 py-2 border border-gray-500 rounded-md">
                                        <div className="text-lg font-medium">Tue, 11 Oct</div>
                                        <div className="text-red-600">02 slots</div>
                                    </button>

                                    <button className="px-4 py-2 border border-gray-500 rounded-md">
                                        <div className="text-lg font-medium">Wed, 12 Oct</div>
                                        <div className="text-yellow-600">05 slots</div>
                                    </button>
                                </div>

                                <button className="absolute right-0 text-gray-400">
                                    <span className="sr-only">Next</span>
                                    ▶
                                </button>
                            </div>
                        </div>

                        {/* Time Slots */}
                        <div className="mb-6">
                            <h4 className="text-gray-800 font-medium mb-3 text-lg">Morning</h4>
                            <div className="grid grid-cols-4 gap-2 mb-6">
                                {['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM'].map((time) => (
                                    <button
                                        key={time}
                                        className="px-3 py-2 text-gray-600 border rounded-lg hover:border-green-500"
                                    >
                                        {time}
                                    </button>
                                ))}
                                <button className="px-3 py-2 text-white bg-green-700 rounded-lg">
                                    10:45 AM
                                </button>
                                <button className="px-3 py-2 text-gray-600 border rounded-lg hover:border-green-500">
                                    11:00 AM
                                </button>
                            </div>

                            <h4 className="text-gray-800 font-medium mb-3 text-lg">Evening</h4>
                            <div className="grid grid-cols-4 gap-2">
                                {['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'].map((time) => (
                                    <button
                                        key={time}
                                        className="px-3 py-2 text-gray-600 border rounded-lg hover:border-green-500"
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Book Button */}
                        <button className="w-full py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors text-lg">
                            Make An Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileContent;