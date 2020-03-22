import * as mongoose from "mongoose";

export interface User {
	_id: string;
	email: string;
	password: string;
}

const UserSchema: mongoose.Schema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true }
});

export interface UserDocument extends mongoose.Document {
	email: string;
	password: string;
}

const UserModel = mongoose.model<UserDocument>("User", UserSchema);
export default UserModel;
