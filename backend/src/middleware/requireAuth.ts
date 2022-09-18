import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    // verify authentication
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authentication token required" });
    }

    const token = authorization.split(" ")[1];

    try {
        const { _id }: any = jwt.verify(token, process.env.SECRET as string);

        // req.user = await User.findOne({ _id }).select("_id");
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ error: "Request is not authorized" });
    }
};
export default requireAuth;
