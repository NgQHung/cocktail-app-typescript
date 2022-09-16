import { Document } from "mongoose";

export default interface IUser extends Document {
    uuid: string;
    name: string;
}
