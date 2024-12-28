

const Approach = () => {
    return (
        <div>
            <div className="text-center md:w-[600px] mx-auto space-y-4 md:px-0 px-5">
                <h1 className="text-4xl font-bold text-green-800">Our Ayurvedic Approach</h1>
                <p>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.</p>
            </div>
            <div className="md:flex items-center justify-between gap-5 my-16 md:px-0 px-5">
                <div className="rounded-3xl border-t-4 h-72 border-t-green-700 p-5 flex flex-col text-center items-center justify-center space-y-3 bg-[#FFF7E2] shadow-md">
                    <h1 className="w-20 h-20 flex items-center justify-center text-4xl font-bold rounded-full bg-green-700 text-white">1</h1>
                    <h1 className="text-2xl font-bold text-green-800">Make Appointment</h1>
                    <p>You must make an appointment in advance, to choose the service and date.</p>
                </div>
                <div className="rounded-3xl border-t-4 h-72 border-t-green-700 p-5 flex flex-col text-center items-center justify-center space-y-3 bg-[#FFF7E2] shadow-md">
                    <h1 className="w-20 h-20 flex items-center justify-center text-4xl font-bold rounded-full bg-green-700 text-white">2</h1>
                    <h1 className="text-2xl font-bold text-green-800">Consultations</h1>
                    <p>The next stage involves a thorough consultation with an Ayurveda practitioner.</p>
                </div>
                <div className="rounded-3xl border-t-4 h-72 border-t-green-700 p-5 flex flex-col text-center items-center justify-center space-y-3 bg-[#FFF7E2] shadow-md">
                    <h1 className="w-20 h-20 flex items-center justify-center text-4xl font-bold rounded-full bg-green-700 text-white">3</h1>
                    <h1 className="text-2xl font-bold text-green-800">Treatment Planning</h1>
                    <p>The Ayurvedic practitioner creates a personalized treatment plan for you</p>
                </div>
                <div className="rounded-3xl border-t-4 h-72 border-t-green-700 p-5 flex flex-col text-center items-center justify-center space-y-3 bg-[#FFF7E2] shadow-md">
                    <h1 className="w-20 h-20 flex items-center justify-center text-4xl font-bold rounded-full bg-green-700 text-white">4</h1>
                    <h1 className="text-2xl font-bold text-green-800">Maintenance</h1>
                    <p>These visits allow for assessment of progress, adjustments to the treatment.</p>
                </div>
            </div>
        </div>
    );
};

export default Approach;