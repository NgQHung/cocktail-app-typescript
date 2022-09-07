module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                navigation: "navigation 1s",
            },
            keyframes: {
                navigation: {
                    "0%,100%": {
                        // transform: "rotate(-6deg)",
                        top: "-10vh",
                        opacity: 0,
                    },
                    "50%": {
                        // transform: "rotate(6deg)",
                        top: 0,
                        opacity: 1,
                    },
                },
            },
        },
    },
    variants: {},
    plugins: [],
};
