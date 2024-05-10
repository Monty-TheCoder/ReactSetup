// import { Route, Routes } from "react-router-dom"
// import Login from "../pages/AuthPage/Login"
// import Register from "../pages/AuthPage/Register"




// const AuthLayout = () => {
//     return (
//         <Routes>
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//         </Routes>
//     )
// }


// export default AuthLayout


import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../pages/AuthPage/Login';
import Signup from '../pages/AuthPage/Signup';
import ForgotPassword from '../pages/AuthPage/ForgotPassword';
import ResetPassword from '../pages/AuthPage/ResetPassword';


const AuthModule: React.FC = () => (
    <Routes>
        <Route path="/" element={<Navigate to="/auth/login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
    </Routes>
);

export default AuthModule;
