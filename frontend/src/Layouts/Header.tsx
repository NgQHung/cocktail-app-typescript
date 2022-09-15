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
import { ConnectionStates } from "mongoose";

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [searchClicked, setSearchClicked] = React.useState(false);
    const searchClicked = useAppSelector((state) => state.UISlice.searchClicked);
    // console.log(searchClicked);

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
                 shadow-xl sticky top-0 z-10 rounded-b-xl h-[90px]`}
            >
                {/* <Navigation /> */}

                <header className="relative bg-white w-full h-full ">
                    <div className="px-4 py-8 h-full w-full flex justify-between items-center sm:items-center ">
                        {/* <!-- logo --> */}
                        {/* <div className=" order-2 sm:order-1 my-0 cursor-pointer"> */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{
                                x: searchClicked ? 100 : 0,
                                opacity: searchClicked ? 0 : 1,
                                transition: {
                                    duration: 1,
                                    type: "tween",
                                },
                            }}
                            className=" order-2 sm:order-1 my-0 cursor-pointer"
                            onClick={() => navigate("/")}
                            // className={
                            //     // " order-2 sm:order-1 my-0  cursor-pointer"
                            //     //  +
                            //     // (searchClicked ? " hidden transition-all" : "")
                            // }
                        >
                            <img
                                className="h-8 md:h-10"
                                src="https://i.pinimg.com/originals/b8/6f/67/b86f67625bc4f99d4b3acfd7992b3c09.png"
                                alt=""
                            />
                        </motion.div>
                        {/* </div> */}

                        {/* <!-- search --> */}
                        <motion.div
                            initial={{ opacity: 1 }}
                            animate={{
                                x: searchClicked ? 300 : 0,
                                opacity: searchClicked ? 0 : 1,
                                transition: {
                                    duration: 1,
                                    type: "tween",
                                },
                            }}
                            onClick={searchClickHandler}
                            className="order-1 pl-2 sm:hidden"
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </motion.div>
                        <Search />

                        {/* </div> */}

                        {/* <!-- nav tools --> */}
                        <div className="order-3 sm:order-3 sm:hidden">
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{
                                    // x: searchClicked ?  : 0,
                                    opacity: searchClicked ? 0 : 1,
                                    transition: {
                                        duration: 0.5,
                                        type: "tween",
                                    },
                                }}
                                className=""
                            >
                                <NavTools />
                            </motion.div>
                        </div>
                        <div className="hidden sm:block sm:order-2 sm:absolute bg-transparent h-full w-full">
                            <Search />
                        </div>

                        <div className="hidden sm:block sm:order-3 ">
                            <NavTools />
                        </div>

                        {/* </div> */}

                        {/* <!-- cart count --> */}
                        <div className="ml-4 hidden sm:flex sm:flex-col sm:order-4 font-bold">
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
