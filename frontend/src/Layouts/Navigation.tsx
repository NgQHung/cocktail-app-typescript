import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <Fragment>
            <div className="flex justify-center mt-2">
                <NavLink className="p-4" to="/alcoholic">
                    Alcoholic
                </NavLink>
                <NavLink className="p-4" to="/non-alcoholic">
                    Non-Alcoholic
                </NavLink>
            </div>
        </Fragment>
    );
};

export default Navigation;
