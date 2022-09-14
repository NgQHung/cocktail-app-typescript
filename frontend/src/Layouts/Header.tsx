import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { searchSliceAction } from "../store/search-slice";
import Search from "./components/Search";
import NavTools from "./components/NavTools";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { UISliceActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [searchClicked, setSearchClicked] = React.useState(false);
    const searchClicked = useAppSelector((state) => state.UISlice.searchClicked);

    const total: any = useSelector<any>((state) => state.cocktailSlice.total);

    const motionSearch = {
        initialPos: {
            x: 0,
        },
        turnRight: {
            x: "100vw",
            transition: {
                type: "spring",
                duration: 3,
            },
        },
        exit: {
            // x: "-100vw",
            transition: {
                delay: 1.5,
                ease: "easeInOut",
            },
        },
    };

    const searchClickHandler = () => {
        dispatch(UISliceActions.searchHandler());
    };

    // const searchPath = location.pathname === "/search";

    return (
        <Fragment>
            <div
                className={`
                 shadow-xl sticky top-0 z-10 rounded-b-xl h-[90px] `}
            >
                {/* <Navigation /> */}

                <header className=" bg-white w-full h-full relative">
                    <div className="mx-auto px-4 py-8 h-full flex items-center">
                        {/* <!-- logo --> */}
                        <div
                            onClick={() => navigate("/")}
                            className={
                                "mr-auto md:w-48 flex-shrink-0 cursor-pointer" +
                                (searchClicked ? " hidden transition-all" : "")
                            }
                        >
                            <img
                                className="h-8 md:h-10"
                                src="https://i.pinimg.com/originals/b8/6f/67/b86f67625bc4f99d4b3acfd7992b3c09.png"
                                alt=""
                            />
                        </div>

                        {/* <!-- search --> */}
                        <div
                            className={
                                "absolute left-1/2 -translate-x-1/2 "
                                // + (searchClicked ? "hidden" : "")
                            }
                        >
                            <div onClick={searchClickHandler} className="">
                                <motion.div
                                    variants={motionSearch}
                                    initial="initialPos"
                                    animate={searchClicked ? "turnRight" : ""}
                                    // exit="exit"
                                >
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </motion.div>
                            </div>
                        </div>
                        <div
                            className={
                                "absolute top-0 left-0 bottom-0 w-full h-full" +
                                (!searchClicked ? " hidden" : "")
                            }
                        >
                            <Search />
                        </div>

                        {/* <!-- buttons --> */}
                        <div
                            className={
                                ""
                                // "hidden sm:block"
                                // + (barsClicked ? "hidden transition-all" : "")
                            }
                        >
                            {/* <div className="hidden"> */}
                            <NavTools />
                        </div>
                        {/* </div> */}

                        {/* <!-- cart count --> */}
                        <div className="ml-4 hidden sm:flex flex-col font-bold">
                            <span className="text-xs text-gray-400">Your Cart</span>
                            <span>$ {total}</span>
                        </div>
                    </div>

                    {/* <hr> */}
                </header>
            </div>
        </Fragment>
    );
};

export default Header;
