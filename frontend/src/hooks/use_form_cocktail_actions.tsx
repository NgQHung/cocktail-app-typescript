import React, { useState } from "react";
import { useAppSelector } from "../store/hook";

interface TypeCocktailEdit {
    name: string;
    type: string;
    price: number;
    addressImage: string;
}

const Use_Form_Cocktail_Actions = (validateInput?: any) => {
    const cocktailEdit = useAppSelector((state) => state.cocktailSlice.addedCocktailEdit);
    // console.log(cocktailEdit);
    const { name, type, price, addressImage } = cocktailEdit;
    // console.log(name, type, price, addressImage);

    const formValues = {
        name: name,
        type: type,
        price: price,
        addressImage: addressImage,
    };

    const [input, setInput] = useState("");
    const [inputEdit, setInputEdit] = useState(formValues);
    const [isTouched, setIsTouched] = useState(false);

    // const inputIsValid = validateInput(input);
    const inputIsValid = true;
    // const hasError = !inputIsValid && isTouched;
    const hasError = false;
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setInput(e.currentTarget.value);
        const { name, value } = e.currentTarget;
        setInputEdit((prev) => ({ ...prev, [name]: value }));
        // console.log(input.name);
        // console.log(e.currentTarget.value);
        // console.log(e?.currentTarget?.name);
        // console.log(name, value);
        console.log(inputEdit);
    };
    // console.log({
    //     name: inputEdit.name,
    //     type: inputEdit.type,
    //     price: inputEdit.price,
    //     addressImage: inputEdit.addressImage,
    // });

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setIsTouched(false);
    };

    return {
        onChangeHandler,
        // input: {
        //     name: input.name,
        //     price: input.price,
        //     type: input.type,
        //     addressImage: input.addressImage,
        // },
        // input.name,
        input,
        inputBlurHandler,
        reset,
        isTouched,
        hasError,
        inputIsValid,
    };
};

export default Use_Form_Cocktail_Actions;
