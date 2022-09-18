import React from "react";

const Test = () => {
    // const [inputEdit, setInputEdit] = React.useState({
    //     name: "Hung",
    //     price: "273",
    //     type: "name",
    //     addressImage: "URL",
    // });

    const [name, setName] = React.useState("Hung");
    const [price, setPrice] = React.useState("273");
    const [type, setType] = React.useState("name");
    const [address, setAddress] = React.useState("Url");
    const [input, setInput] = React.useState({
        name: "Hung",
        price: "273",
        type: "name",
        address: "url",
    });

    const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.currentTarget.name);
        // setInput((prev) => ({ ...prev, name: e.currentTarget.value }));
        // setInput(e.currentTarget.value);
        // if (!e.currentTarget.value) return;
        // if (!e.currentTarget.name) return;
        // if()
        // setInputEdit((prev) => ({ ...prev, [e.currentTarget.name]: e.currentTarget.value }));
        // console.log(inputEdit);
        setName(e.currentTarget.value);
        // setInput()
        // console.log(e.currentTarget.name);
        const { name, value } = e.currentTarget;
        setInput((prevState) => ({ ...prevState, [name]: value }));
        console.log(input);
        // console.log(e.currentTarget.value);
    };

    const clickHandler = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // console.log(inputEdit);
        const formInput = {
            name: name,
            price: price,
            type: type,
            address: address,
        };
        // console.log(formInput);
    };

    return (
        <div className=" flex flex-col justify-start">
            <div className=" w-[300px] ml-[100px] mb-4">
                <input
                    type="text"
                    name="name"
                    placeholder="enter your name"
                    value={name}
                    onChange={nameChangeHandler}
                    className="p-4 border border-black   "
                />
            </div>
            <div className=" w-[300px] ml-[100px] mb-4">
                <input
                    type="text"
                    name="price"
                    placeholder="enter your price"
                    value={price}
                    onChange={nameChangeHandler}
                    className="p-4 border border-black   "
                />
            </div>
            <div className=" w-[300px] ml-[100px] mb-4">
                <input
                    type="text"
                    name="type"
                    placeholder="enter your type"
                    value={type}
                    onChange={nameChangeHandler}
                    className="p-4 border border-black   "
                />
            </div>
            <div className=" w-[300px] ml-[100px] mb-4">
                <input
                    type="text"
                    name="address"
                    placeholder="enter your address"
                    value={address}
                    onChange={nameChangeHandler}
                    className="p-4 border border-black   "
                />
            </div>
            <div className="ml-[100px] mb-4">
                <button className="border border-black p-2" onClick={clickHandler}>
                    Click
                </button>
            </div>
        </div>
    );
};

export default Test;
