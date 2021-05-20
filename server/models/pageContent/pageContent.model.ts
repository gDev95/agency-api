import * as mongoose from "mongoose";

interface ISlogan {
    en: string;
    es: string;
}


interface IMission {
    en: string;
    es: string;
}

interface ISocialMedia  {
    facebook: string;
    soundcloud: string;
    instagram: string;
}

export interface PageContent {
	_id: string;
	lastModified: string;
	slogan: ISlogan;
	mission: IMission;
	socialMedia: ISocialMedia;
}

export interface IPageContentDocument extends mongoose.Document {
    lastModified: string;
	slogan: ISlogan;
	mission: IMission;
	socialMedia: ISocialMedia;
}

const PageContentSchema: mongoose.Schema = new mongoose.Schema({
	lastModified: { type: String, required: true },
	slogan: { type: Object, required: true, unique: true },
	mission: { type: Object, required: true, unique: true },
	socialMedia: { type: Object, required: true },
});

const PageContent = mongoose.model<IPageContentDocument>("PageContent", PageContentSchema);
export default PageContent;
