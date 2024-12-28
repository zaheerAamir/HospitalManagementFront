import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const BookAppointment = () => {
  const location = useLocation();
  const { appointmentDetails } = location.state || {};

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');
  const [isError, setIsError] = useState(false);  // New state to track errors

  if (!appointmentDetails) {
    return <div>No appointment details available.</div>;
  }

  const handleConfirmBooking = async () => {
    setIsButtonDisabled(true);

    // Extract appointmentID from appointmentDetails
    const { appointmentID, userID } = appointmentDetails;
    console.log(userID);

    // Make API call to book the appointment
    try {
      const response = await fetch(`http://localhost:8080/bookAppointment/${appointmentID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'userID': userID,  // Include userID in headers
        },
      });

      const data = await response.json();
      if (response.ok) {
        setIsError(false);  // Clear error state if the response is successful
        setBookingMessage(data.message);  // Set the message from API response
        alert('Consultation booked successfully!');  // Optionally show a confirmation alert
      } else {
        setIsError(true);  // Set error state if the response is not okay
        setBookingMessage(data.error);  // Set the error message from API response
      }
    } catch (error) {
      console.error('Error while booking appointment:', error);
      setIsError(true);  // Set error state on failure
      setBookingMessage('Error while booking appointment');  // Set a generic error message
    }
  };

  return (
    <div className="md:w-10/12 mx-auto flex flex-col items-center gap-6 mt-6">
      <h2 className="text-3xl font-semibold">Book Appointment</h2>
      <div className="bg-[#fdf6e9] rounded-3xl border border-gray-400 p-6 w-full max-w-[800px]">
        <h3 className="text-2xl font-semibold mb-4">Consultation Details</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Doctor Name:</span>
            <span>{appointmentDetails.doctorName}</span>
          </div>
          <div className="flex justify-between">
            <span>Doctor Email:</span>
            <span>{appointmentDetails.doctorEmail}</span>
          </div>
          <div className="flex justify-between">
            <span>Appointment Date:</span>
            <span>{appointmentDetails.appointmentTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Cost:</span>
            <span>${appointmentDetails.appointmentCost}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>{appointmentDetails.appointmentDiscount}%</span>
          </div>

          <div className="mt-6">
            <button
              className={`py-2 px-4 rounded-lg ${isButtonDisabled ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-800'} text-white`}
              onClick={handleConfirmBooking}
              disabled={isButtonDisabled} // Disable button if true
            >
              {isButtonDisabled ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>

          {bookingMessage && (
            <div
              className={`mt-4 p-4 rounded-lg ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}
            >
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;


/*
const BookAppointment = () => {
  const location = useLocation();
  const { appointmentDetails } = location.state || {};

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');

  if (!appointmentDetails) {
    return <div>No appointment details available.</div>;
  }

  const handleConfirmBooking = async () => {
    setIsButtonDisabled(true);

    // Extract appointmentID from appointmentDetails
    const { appointmentID, userID } = appointmentDetails;
    console.log(userID)

    // Make API call to book the appointment
    try {
      const response = await fetch(`http://localhost:8080/bookAppointment/${appointmentID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'userID': userID,  // Include userID in headers
        },
      });

        const data = await response.json();
      if (response.ok) {
        setBookingMessage(data.message);  // Set the message from API response
        alert('Consultation booked successfully!');  // Optionally show a confirmation alert
      } else {
        setBookingMessage(data.error);  // Set the message from API response
      }
    } catch (error) {
      console.error('Error while booking appointment:', error);
      alert('Error while booking appointment');
    }
  };

  return (
    <div className="md:w-10/12 mx-auto flex flex-col items-center gap-6 mt-6">
      <h2 className="text-3xl font-semibold">Book Appointment</h2>
      <div className="bg-[#fdf6e9] rounded-3xl border border-gray-400 p-6 w-full max-w-[800px]">
        <h3 className="text-2xl font-semibold mb-4">Consultation Details</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Doctor Name:</span>
            <span>{appointmentDetails.doctorName}</span>
          </div>
          <div className="flex justify-between">
            <span>Doctor Email:</span>
            <span>{appointmentDetails.doctorEmail}</span>
          </div>
          <div className="flex justify-between">
            <span>Appointment Date:</span>
            <span>{appointmentDetails.appointmentTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Cost:</span>
            <span>${appointmentDetails.appointmentCost}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount:</span>
            <span>{appointmentDetails.appointmentDiscount}%</span>
          </div>

          <div className="mt-6">
            <button
              className={`py-2 px-4 rounded-lg ${isButtonDisabled ? 'bg-gray-400' : 'bg-green-700 hover:bg-green-800'} text-white`}
              onClick={handleConfirmBooking}
              disabled={isButtonDisabled} // Disable button if true
            >
              {isButtonDisabled ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>

          {bookingMessage && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
*/