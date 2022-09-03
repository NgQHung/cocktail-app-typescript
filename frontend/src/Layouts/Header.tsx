import React, { useState } from "react";
import { ButtonHeader } from "../UI/Button";
import Navigation from "../pages/Navigation";
import { Link, useLocation, Navigate } from "react-router-dom";

// interface MatchParams {
//     id: string
// }

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const location = useLocation();
    // const navigate = useNavigate();
    // console.log(location);
    const isNavigation = location.pathname === "/navigation";

    return (
        <div className=" flex flex-col w-full border-b-4 shadow-md sticky top-0 z-40 bg-white p-4 ">
            <Link to="/navigation">
                <ButtonHeader clickHandler={() => setIsClicked(!isClicked)}>Cocktail</ButtonHeader>
            </Link>
            {isClicked && <Navigation />}
            {!isClicked && isNavigation ? <Navigate to="/" /> : null}
        </div>
    );
};

export default Header;
