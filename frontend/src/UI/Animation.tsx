// motion navigation
export const motionNavigation = {
    hidden: {
        y: "-10vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "spring",
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};
export const motionNavigation_content_l = {
    hidden: {
        x: "-10vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    transition: {
        delay: 0.5,
        type: "spring",
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

export const motionNavigation_content_r = {
    hidden: {
        x: "10vh",
        opacity: 0,
    },
    turnDown: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "spring",
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

// motion header
export const motionHeader = {
    hidden: {
        x: "-20vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    transition: {
        delay: 1,
        type: "spring",
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

// motion search
export const motionSearch = {
    hidden: {
        x: "30vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    transition: {
        delay: 0.5,
        type: "spring",
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

export const motionSearchType = {
    hidden: {
        x: "-30vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
    transition: {
        delay: 0.5,
        type: "spring",
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};
export const motionAlert = {
    hidden: {
        y: "-50vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            // delay: 5,
            type: "spring",
        },
    },

    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

export const motionSearchDown = {
    hidden: {
        y: "-10vh",
        opacity: 0,
    },
    turnDown: {
        y: 0,
        opacity: 1,
        transition: {
            // delay: 0.5,
            duration: 1,
            // type: "spring",
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};

export const motionNavtoolsLeft = {
    hidden: {
        x: "150vw",
        // opacity: 0,
    },
    turnLeft: {
        x: 0,
        opacity: 1,
        transition: {
            // delay: 0.5,
            duration: 2,
            type: "spring",
        },
    },
    exit: {
        x: "-100vw",
        transition: {
            ease: "easeInOut",
        },
    },
};
