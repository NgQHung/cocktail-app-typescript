import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { motionAlert } from "./Animation";

const Alert = () => {
    return (
        <Fragment>
            <motion.div
                variants={motionAlert}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:fixed lg:top-[150px] lg:left-[100px] lg:w-[500px] z-50 bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700"
                role="alert"
            >
                <h4 className="text-2xl font-medium leading-tight mb-2">Well done!</h4>
                <p className="mb-4">Your cocktail is added successfully</p>
                <hr className="border-green-600 opacity-30" />
            </motion.div>
        </Fragment>
    );
};

export default Alert;
