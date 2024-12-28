import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import FindDoctors from "../Components/FindDoctorsContent/FindDoctors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DoctorProfile from "../Components/HomeContent/DoctorProfile/DoctorProfile";
import SignUp from "../Components/HomeContent/Navbar/SignUp";
import Login from "../Components/HomeContent/Navbar/Login";
import BookAppointment from "../Components/FindDoctorsContent/BookAppointment";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/find-doctor",
                element: <FindDoctors/>
            },
            {
                path: "/profile",
                element: <DoctorProfile />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/book-appointment",
                element: <BookAppointment />
            }
        ]
    },
]);
export default router;