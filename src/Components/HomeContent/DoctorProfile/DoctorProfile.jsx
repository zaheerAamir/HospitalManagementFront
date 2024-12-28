import ProfileContent from "./ProfileContent";
import ProfileHeder from "./ProfileHeder";


const DoctorProfile = () => {
    return (
        <div className="md:w-10/12 mx-auto">
            <ProfileHeder />
            <ProfileContent/>
            
        </div>
    );
};

export default DoctorProfile;