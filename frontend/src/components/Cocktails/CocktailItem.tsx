import axios from "axios";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cocktailSliceAction } from "../../store/cocktail-slice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { notificationSliceActions } from "../../store/notification-slice";
// import { postDataToUser } from "../../store/slice-http";

interface Props {
    id?: number;
    name?: string;
    image?: string;
}

const CocktailItem: React.FC<Props> = (props) => {
    const { id, name, image } = props;
    const urlName = name?.split(" ").join("%");
    const cocktailBasket = useAppSelector((state) => state.cocktailSlice.cocktailsBasket);
    // let user: any;
    // let idUser: any;
    React.useEffect(() => {
        try {
            // return user = localStorage.getItem("User") || '';
            // idUser = JSON.parse(user).user.id;
        } catch (error) {
            console.log(error);
        }
    }, []);

    // console.log(user);

    const price = 273;

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const viewCocktailHandler = async () => {
        const res = await axios.get(
            `http://www.thecocktaildb.com/api/json/v1/1/search.php?s=${urlName}`
        );
        dispatch(cocktailSliceAction.viewCocktailHandler(res.data.drinks));
        navigate("/cocktail/" + name);
    };

    // const postDataToUser = async (id: string, data: any) => {
    //     console.log("hello");
    //     await axios.post(`http://localhost:4000/users/${id}/shopping-cart`, {
    //         id: id,
    //         data: data,
    //     });
    // };

    const addCocktailHandler = () => {
        dispatch(
            cocktailSliceAction.addCocktail({
                id: id,
                name: name,
                image: image,
                price: price,
                amount: 1,
                totalPrice: 0,
            })
        );
        // const data: any = [
        //     {
        //         id: id,
        //         name: name,
        //         image: image,
        //         price: price,
        //         amount: 1,
        //         totalPrice: 0,
        //     },
        // ];
        // postDataToUser(idUSer, data);
        if (cocktailBasket) {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Well done!",
                    description: "Cocktail is added successfully",
                    type: "success",
                    about: "addCocktail",
                })
            );
        } else {
            dispatch(
                notificationSliceActions.alertHandler({
                    title: "Error!",
                    description: "Something went wrong, cocktail failed to add",
                    type: "error",
                    about: "addCocktail",
                })
            );
        }
    };

    return (
        <Fragment>
            <div className="my-12 mx-6 cursor-pointer">
                <div className=" relative ">
                    <div className=" absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50 ">
                        <p className="text-xs leading-3 text-gray-800">New</p>
                    </div>
                    <div className=" relative group">
                        <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                        <img className=" w-full" src={image} alt={name} />
                        <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100 ">
                            <button
                                onClick={addCocktailHandler}
                                className=" font-medium text-base leading-4 text-gray-800 bg-white hover:bg-gray-200 hover:transition-colors py-3 w-full"
                            >
                                Add to bag
                            </button>
                            <button
                                type="button"
                                className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white hover:text-black hover:bg-gray-100 hover:transition-all"
                                onClick={viewCocktailHandler}
                            >
                                Quick View
                            </button>
                        </div>
                    </div>
                    <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                        {name}
                    </p>
                    <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">{price}</p>
                </div>
            </div>
        </Fragment>
    );
};

export default CocktailItem;
