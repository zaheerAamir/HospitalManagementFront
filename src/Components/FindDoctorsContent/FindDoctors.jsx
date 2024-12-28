import { FaLink, } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import cardProfile from "../../assets/group.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [expandedAppointment, setExpandedAppointment] = useState(null); // Track expanded appointment
  const navigate = useNavigate(); // Initialize navigate function

  // Fetch doctors on component mount
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("http://localhost:8080/getAvailableDoctors");
        const data = await response.json();
        if (data.Response.statusCode === 200) {
          // Fetch appointments for each doctor
          const doctorsWithAppointments = await Promise.all(
            data.result.map(async (doctor) => {
              const appointmentsResponse = await fetch(
                `http://localhost:8080/getAvailableAppointments/${doctor.id}`
              );
              const appointmentsData = await appointmentsResponse.json();
              return {
                ...doctor,
                appointments: appointmentsData.result,
              };
            })
          );
          setDoctors(doctorsWithAppointments);
        } else {
          console.error(data.Response.message || "Failed to fetch doctors.");
        }
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Handle appointment click to toggle expansion
  const handleAppointmentClick = (appointment) => {
    if (expandedAppointment === appointment) {
      setExpandedAppointment(null); // Collapse if clicked again
    } else {
      setExpandedAppointment(appointment); // Expand the clicked appointment
    }
  };

  // Handle booking consultation
  const handleBookConsultation = (appointment, doctor) => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user !== null) {
      if (user.name !== null && user.role !== null && user.role === "User") {

        navigate('/book-appointment', {
          state: {
            appointmentDetails: {
              userID: user.userId,
              appointmentID: appointment.appointmentID,
              doctorName: doctor.name,
              doctorEmail: doctor.email,
              appointmentTime: appointment.appointmentTime,
              appointmentCost: appointment.cost,
              appointmentDiscount: appointment.discount,
            },
          },
        });

      } else if (user.role !== null && user.role !== "User") {

        alert("You do not have the required permissions to book a consultation.");
      }
    } else {

      alert("You are not logged in. Please log in to book a consultation.");
    }



  };

  return (
    <div className="md:w-10/12 mx-auto flex flex-col items-center gap-6 mt-6">
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className="bg-[#fdf6e9] rounded-3xl border border-gray-400 p-6 w-full max-w-[800px]"
        >
          <div className="flex flex-col items-center md:items-start md:flex-row">
            <div className="relative mb-4 md:mb-0 md:mr-6">
              <img
                src={cardProfile} // Use a default profile image or doctor-specific image
                alt={`${doctor.name}'s profile`}
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mt-3 text-center md:text-left">
                Dr. {doctor.name}
              </h2>
              <div className="space-y-2 my-4">
                <div className="flex items-center text-gray-600">
                  <FaLink className="w-4 h-4 mr-2" />
                  <span>Email: {doctor.email}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <FaMessage className="w-4 h-4 mr-2" />
                  <span>Speaks: English</span> {/* Add languages if available */}
                </div>
              </div>
            </div>
          </div>

          {/* Appointments Section */}
          {doctor.appointments.length > 0 && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Available Appointments</h3>
              <ul className="space-y-4 mt-4">
                {doctor.appointments.map((appointment, index) => (
                  <li
                    key={index}
                    className={`flex justify-between items-center p-4 border border-gray-300 rounded-xl ${appointment.available
                      ? "bg-green-100"
                      : "bg-gray-200"
                      }`}
                    onClick={() => handleAppointmentClick(appointment)} // Toggle expansion
                    style={{
                      height: expandedAppointment === appointment ? "auto" : "80px", // Expand appointment on click
                    }}
                  >
                    <div className="flex flex-col w-full">
                      <span>
                        {appointment.appointmentTime}{" "}
                        <span className="text-gray-500">
                          (Grace period: {appointment.gracePeriod} mins)
                        </span>
                      </span>
                      <span
                        className={`text-sm font-semibold ${appointment.available
                          ? "text-green-600"
                          : "text-red-600"
                          }`}
                      >
                        {appointment.available ? "Available" : "Not Available"}
                      </span>

                      {/* Display the cost of the appointment */}
                      <div>
                        <span className="text-lg font-semibold text-gray-700 mr-4">
                          Cost: ${appointment.cost}
                        </span>
                        <span className="text-lg font-semibold text-gray-700">
                          Discount: {appointment.discount}% (Only Available to first time customers only!)
                        </span>
                      </div>

                      {/* Conditionally render the button inside the same appointment block */}
                      {expandedAppointment === appointment && appointment.available && (
                        <div className="mt-4">
                          <button
                            className="py-2 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800"
                            onClick={() => handleBookConsultation(appointment, doctor)} // Trigger the booking validation
                          >
                            Book a consultation
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DoctorList;

