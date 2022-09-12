import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { motionAlert } from "./Animation";
import { useSelector } from "react-redux";

export const AlertSuccess = () => {
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

export const AlertSuccessRemoved = () => {
    return (
        <Fragment>
            <motion.div
                variants={motionAlert}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:fixed lg:top-[150px] lg:left-[100px] lg:w-[500px] z-50 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                role="alert"
            >
                <h4 className="text-2xl font-medium leading-tight mb-2">Well done!</h4>
                <p className="mb-4">Your cocktail is deleted successfully</p>
                <hr className="border-red-600 opacity-30" />
            </motion.div>
        </Fragment>
    );
};

export const AlertError = () => {
    return (
        <Fragment>
            <motion.div
                variants={motionAlert}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:fixed lg:top-[150px] lg:left-[100px] lg:w-[500px] z-50 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                role="alert"
            >
                <h4 className="text-2xl font-medium leading-tight mb-2">Error!</h4>
                <p className="mb-4">Something went wrong</p>
                <hr className="border-red-600 opacity-30" />
            </motion.div>
        </Fragment>
    );
};

export const Alert = () => {
    const alertContent = useSelector((state: any) => state.notificationSlice.alertContent);

    return (
        <Fragment>
            <motion.div
                variants={motionAlert}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:fixed lg:top-[150px] lg:left-[100px] lg:w-[500px] z-50 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700"
                role="alert"
            >
                <h4 className="text-2xl font-medium leading-tight mb-2">{alertContent.title}</h4>
                <p className="mb-4">{alertContent.description}</p>
                <hr className="border-red-600 opacity-30" />
            </motion.div>
        </Fragment>
    );
};
