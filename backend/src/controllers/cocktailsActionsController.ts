import express from "express";
import MyCocktail from "../models/myCocktail";

export const createCocktail = async (req: express.Request, res: express.Response) => {
    const { name, type, price, addressImage } = req.body;

    // find the same name
    try {
        const nameExists = await MyCocktail.findOne({ name: name });
        if (nameExists) {
            return res.status(200).json({
                data: null,
                error: {
                    msg: `This cocktail (${name}) existed, please enter another one`,
                },
            });
        }
        await MyCocktail.create({
            name: name,
            type: type,
            price: price,
            addressImage: addressImage,
        });
        return res.json({
            data: {
                name: name,
                type: type,
                price: price,
                addressImage: addressImage,
            },
            msg: "You sent data successfully",
        });
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }

    // res
};

// export const createIngredient = async (req: express.Request, res: express.Response) => {
//     const { name, type, price, addressImage } = req.body;

//     // find the same name
//     try {
//         const nameExists = await MyCocktail.findOne({ name: name });
//         if (nameExists) {
//             return res.status(200).json({
//                 data: null,
//                 error: {
//                     msg: `This cocktail (${name}) existed, please enter another one`,
//                 },
//             });
//         }
//         await MyCocktail.create({
//             name: name,
//             type: type,
//             price: price,
//             addressImage: addressImage,
//         });
//         return res.json({
//             data: {
//                 name: name,
//                 type: type,
//                 price: price,
//                 addressImage: addressImage,
//             },
//             msg: "You sent data successfully",
//         });
//     } catch (error: any) {
//         return res.status(400).json({
//             data: null,
//             error: {
//                 msg: "Something went wrong",
//                 error: error.message,
//             },
//         });
//     }

//     // res
// };

export const addedCocktail = async (req: express.Request, res: express.Response) => {
    const addedCocktails = await MyCocktail.find({});
    try {
        return res.json(addedCocktails);
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
};

export const viewDetailCocktail = async (req: express.Request, res: express.Response) => {
    const { slug } = req.params;

    try {
        const cocktail = await MyCocktail.findById(slug);
        if (cocktail) {
            return res.json({ cocktail, msg: "You get data successfully" });
        }
        return;
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
    // res.json(req.params.slug);
};

export const editCocktail = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
        const cocktail = await MyCocktail.findById(id);
        if (cocktail) {
            // res.json({ cocktail, msg: "You get data successfully" });
            // res.render(`/${id}/edit`);
            res.json(cocktail);
        }
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }

    // res.json(req.params.slug);
};

export const updateCocktail = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    const { name, price, type, addressImage } = req.body;
    let error;
    try {
        if (isNaN(price)) {
            error = {
                msg: "Price must be a number",
            };
        }
        if (error) {
            return res.json({
                data: null,
                error: error,
            });
        }
        const cocktail = await MyCocktail.updateOne({ _id: id }, req.body);
        if (cocktail) {
            return res.status(200).json(cocktail);
        }
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
};

export const deleteCocktail = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
        const cocktail = await MyCocktail.softDelete({ _id: id });
        if (cocktail) {
            return res.status(200).json({ cocktail, msg: "You deleted data successfully" });
        }
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
};

export const storeDeletedCocktails = async (req: express.Request, res: express.Response) => {
    // const { id } = req.params;
    try {
        const cocktail = await MyCocktail.findDeleted();
        if (cocktail) {
            return res.status(200).json({ cocktail, msg: "You get data successfully" });
        }
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
};

export const forceDeletedCocktails = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
        const cocktail = await MyCocktail.deleteOne({ _id: id });
        if (cocktail) {
            return res.status(200).json({ cocktail, msg: "You deleted data successfully" });
        }
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
};

export const restoreDeletedCocktails = async (req: express.Request, res: express.Response) => {
    const { id } = req.params;
    try {
        const cocktail = await MyCocktail.restore({ _id: id });
        if (cocktail) {
            return res.status(200).json({ cocktail, msg: "You restored data successfully" });
        }
        // res.json(id);
    } catch (error: any) {
        return res.status(400).json({
            data: null,
            error: {
                msg: "Something went wrong",
                error: error.message,
            },
        });
    }
};
