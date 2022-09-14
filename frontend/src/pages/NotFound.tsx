import React from "react";
// import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const NotFound = () => {
    // const location = useLocation();
    return (
        <div>
            <div className="flex justify-center items-center my-12">Not Found</div>

            <div className="h-80"></div>
        </div>
    );
};

export default NotFound;
