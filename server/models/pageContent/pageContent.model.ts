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
    soundCloud: string;
    instagram: string;
}

interface IContactDetails {
	email: string;
	phone: string;
}

export interface IPageContent {
	_id: string;
	lastModified: string;
	slogan: ISlogan;
	mission: IMission;
	socialMedia: ISocialMedia;
	contactDetails: IContactDetails;
}

export interface IPageContentDocument extends mongoose.Document {
    lastModified: string;
	slogan: ISlogan;
	mission: IMission;
	socialMedia: ISocialMedia;
	contactDetails: IContactDetails;
}

const PageContentSchema: mongoose.Schema = new mongoose.Schema({
	lastModified: { type: String, required: true },
	slogan: { type: Object, required: true, unique: true },
	mission: { type: Object, required: true, unique: true },
	socialMedia: { type: Object, required: true },
	contactDetails: { type: Object, required: true}
});

const PageContentModel = mongoose.model<IPageContentDocument>("PageContent", PageContentSchema);
export default PageContentModel;
