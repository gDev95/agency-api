import * as mongoose from "mongoose";

export interface INews {
  _id: string;
  createdAt: string;
  imageUrl?: string;
  externalLink?: string;
  videoLink?: string;
  title: string;
}

export interface INewsDocument extends mongoose.Document {
  createdAt: string;
  imageUrl?: string;
  externalLink?: string;
  title: string;
  videoLink?: string;
}

const NewsSchema: mongoose.Schema = new mongoose.Schema({
  createdAt: { type: String, required: true },
  imageUrl: { type: String, required: false, default: null },
  title: { type: String, required: true },
  externalLink: { type: String, required: false, default: null },
  videoLink: { type: String, required: false, default: null },
});

const NewsModel = mongoose.model<INewsDocument>("News", NewsSchema);
export default NewsModel;
