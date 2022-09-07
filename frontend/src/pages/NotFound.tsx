import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const NotFound = () => {
    const location = useLocation();
    // const selectedTypes: any = useSelector<any>((state) => state.searchSlice.typeSearchClicked);
    // console.log(selectedTypes);
    // console.log(location.search);
    return (
        <div>
            <div className="flex justify-center items-center my-12">
                Not Found
                {/* {location.search} */}
            </div>
            {/* <div className="flex justify-center items-center my-12 text-xl">
                Please Enter a Valid Cocktail
            </div> */}

            <div className="h-80"></div>
        </div>
    );
};

export default NotFound;
