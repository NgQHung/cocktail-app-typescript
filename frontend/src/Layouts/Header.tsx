import React, { useState } from "react";
import { ButtonHeader } from "../UI/Button";
import Navigation from "./Navigation";

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);

    // const navigationContent = isClicked && <Navigation/>

    return (
        <div className=" flex flex-col w-full border-b-4 shadow-md sticky top-0 z-40 bg-white p-4 ">
            <ButtonHeader clickHandler={() => setIsClicked(!isClicked)}>Cocktail</ButtonHeader>
            {isClicked && <Navigation />}
        </div>
    );
};

export default Header;
