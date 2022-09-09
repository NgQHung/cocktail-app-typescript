import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { formSliceActions } from "../store/form-slice";

const Use_Form = (validateInput: any) => {
    // const [inputObj, setInputObj] = useState(initialValue);
    const [input, setInput] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const dispatch = useDispatch();

    const inputIsValid = validateInput(input);
    const hasError = !inputIsValid && isTouched;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setInputObj({ ...inputObj, [e.currentTarget.name]: e.currentTarget.value });
        setInput(e.currentTarget.value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setInput("");
        setIsTouched(false);
    };

    return {
        onChangeHandler,
        input,
        inputBlurHandler,
        reset,
        isTouched,
        hasError,
        inputIsValid,
    };
};

export default Use_Form;
