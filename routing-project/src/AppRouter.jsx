import React from 'react';
import {Routes, Route} from "react-router-dom";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import SignIn from "./components/pages/SignIn/SignIn";
import Home from "./components/pages/Home/Home";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about-us" element={<AboutUs />}/>
            <Route path="/sign-in" element={<SignIn />}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;