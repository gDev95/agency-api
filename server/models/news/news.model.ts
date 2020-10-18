import * as mongoose from "mongoose";

export interface INewsDocument extends mongoose.Document {
	link: string;
	logo: string;
}

export interface News {
	_id: string;
	createdAt: string;
	link: string;
	logo: string;
}

const NewsSchema: mongoose.Schema = new mongoose.Schema({
	createdAt: { type: String, required: true },
	link: { type: String, required: true },
	logo: { type: String, required: true },
});

const NewsModel = mongoose.model<INewsDocument>("News", NewsSchema);
export default NewsModel;
