import Approach from "../../Components/HomeContent/Approach/Approach";
import MeetExpert from "../../Components/HomeContent/MeetExpert/MeetExpert";

const Home = () => {
    return (
        <div>

            <div className="md:w-10/12 mx-auto">
                <MeetExpert />
            </div>
            <div className="md:w-10/12 mx-auto">
                <Approach />
            </div>
        </div>
    );
};

export default Home;