// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Cocktails from "../components/Cocktails/Cocktails";
import { Cocktail } from "../models/cocktails";
import { useAppSelector } from "../store/hook";
import { Alert } from "../UI/Alert";
import Loading from "../UI/Loading";
// import { useAppSelector } from "../store/hook";

interface Props {
    cocktailData: Cocktail[];
    // selectedType: string;
}

const Main: React.FC<Props> = (props) => {
    // console.log(props.cocktailData.length === 0);
    // const alertError = useAppSelector((state) => state.notificationSlice.alertError);
    // console.log("alertError:", alertError);
    // const typeCocktail = useAppSelector((state) => state.dataSlice.typeCocktail);

    return (
        <div className=" 2xl:container 2xl:mx-auto min-h-[calc(100vh-90px)] relative">
            <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
                <p className=" w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
                    Well come!!!
                    <br />
                </p>
            </div>
            <div className=" flex justify-between items-center">
                <div className=" flex space-x-3 justify-center items-center">
                    {/* {alertError && props.cocktailData.length === 0 ? (
                        <Loading />
                    ) : ( */}
                    <Cocktails cocktailData={props.cocktailData} />
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default Main;
