import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { notificationSliceActions } from "../store/notification-slice";
import { UISliceActions } from "../store/ui-slice";
import Modal from "../UI/Modal";

const Confirmation = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const addedCocktailDetail = useAppSelector((state) => state.cocktailSlice.addedCocktailDetail);
    const confirmationContent = useAppSelector((state) => state.UISlice.confirmationContent);
    const detail = addedCocktailDetail?.cocktail;
    const id = useAppSelector((state) => state.cocktailSlice.idSelectedCocktail);
    const deleteConfirmation = confirmationContent?.title === "Delete";
    const forceDeleteConfirmation = confirmationContent?.title === "Force Delete";

    const sendReqDeleteData = async () => {
        const res = await axios.delete(`http://localhost:4000/api/my-cocktail/${id}/delete`);
        if (res.data.data === null) {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error!",
                    description: res.data.error.msg,
                    type: "error",
                })
            );
        } else {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Success!",
                    description: res.data.msg,
                    type: "success",
                })
            );

            // navigate('/my-cocktail')
            setTimeout(() => navigate("/my-cocktail"), 1000);
        }
    };

    const sendReqForceDeleteData = async () => {
        const res = await axios.delete(`http://localhost:4000/api/my-cocktail/${id}/force-delete`);
        if (res.data.data === null) {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error!",
                    description: res.data.error.msg,
                    type: "error",
                })
            );
        } else {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Success!",
                    description: res.data.msg,
                    type: "success",
                })
            );

            // navigate('/my-cocktail')
            setTimeout(() => navigate(""), 1000);
        }
    };
    // const deleteClicked = useAppSelector((state) => state.UISlice.deleteClicked);

    const deleteCocktailHandler = () => {
        if (deleteConfirmation) {
            sendReqDeleteData();
        }
        if (forceDeleteConfirmation) {
            sendReqForceDeleteData();
        }
        dispatch(UISliceActions.deleteHandler(false));
    };

    const closeConfirmationHandler = () => {
        dispatch(UISliceActions.deleteHandler(false));
    };
    return (
        <Modal>
            {/* <div className="antialiased bg-gray-200 text-gray-900 font-sans overflow-x-hidden"> */}
            <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                {/* <div className="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div> */}
                <div className="bg-white rounded-lg md:max-w-md md:mx-auto px-12 py-8 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                    <div className="md:flex items-center pb-4">
                        {/* <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                            <i className="bx bx-error text-3xl"></i>
                        </div> */}
                        <div className="mt-4 md:mt-0  text-center md:text-left">
                            <p className="font-bold pb-4">{confirmationContent?.title}</p>
                            <p className="text-sm text-gray-700 mt-1 pb-4">
                                {confirmationContent?.description}
                            </p>
                        </div>
                    </div>
                    <div className="text-center md:text-right mt-4 md:flex md:justify-end ">
                        <button
                            onClick={deleteCocktailHandler}
                            className="block  w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-1 mr-4"
                        >
                            Delete Cocktail
                        </button>
                        <button
                            onClick={closeConfirmationHandler}
                            className="block  w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
                            md:mt-0 md:order-2"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </Modal>
    );
};

export default Confirmation;
