import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { motionAlert } from "./Animation";
import { useSelector } from "react-redux";

export const Alert = () => {
    const alertContent = useSelector((state: any) => state.notificationSlice.alertContent);
    const successType = alertContent?.type === "success";

    return (
        <Fragment>
            <motion.div
                variants={motionAlert}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`w-[500px] lg:absolute lg:top-[150px] lg:left-[100px] lg:w-[500px] z-50  rounded-lg py-5 px-6 mb-4 text-base ${
                    successType ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                } `}
                // role="alert"
            >
                <h4 className="text-2xl font-medium leading-tight mb-2">{alertContent?.title}</h4>
                <p className="mb-4">{alertContent?.description}</p>
                <hr
                    className={
                        " opacity-30" + (successType ? "border-green-600" : "border-red-600")
                    }
                />
            </motion.div>
        </Fragment>
    );
};
