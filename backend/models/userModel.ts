import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import IUser from "../interfaces/user";

export interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
}

export interface UserModel extends mongoose.Model<UserDocument> {
    _id: string;
    email: string;
    signup(email: string, password: string): UserDocument;
    login(email: string, password: string): UserDocument;
}

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// UserSchema.statics.signup = async function (email, password) {
//     if (!email || !password) {
//         throw Error("All field must not be empty");
//     }
//     if (!validator.isEmail(email)) {
//         throw Error("Email is not valid");
//     }

//     if (!validator.isStrongPassword(password)) {
//         throw new Error("Password is not strong enough");
//     }

//     const exist = await this.findOne({ email });
//     if (exist) {
//         throw Error("Email already in use");
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const user = await this.create({ email, password: hashedPassword });

//     return user;
// };

// UserSchema.statics.login = async function (email, password) {
//     if (!email || !password) {
//         throw Error("All field must not be empty");
//     }

//     const user = await this.findOne({ email });
//     if (!user) {
//         throw new Error("Incorrect email");
//     }

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) {
//         throw new Error("Incorrect password");
//     }

//     return user;
// };

const User: UserModel = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export default User;
