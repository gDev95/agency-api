import * as mongoose from "mongoose";

export interface IEventTime {
	start: string;
	end: string;
}

export interface IEvent {
	time: IEventTime;
	location: string;
	city: string;
	facebookLink: string;
	residentAdvisorLink: string;
}

export interface ILabel {
	logoUrl: string;
	link: string;
}
export interface ISetup {
	equipment: string[];
	equipmentImageUrl: string;
}

export interface IBasicInformation {
	name: string;
	description: string;
	logoUrl: string;
	coverImageUrl: string;
	profileImageUrl: string;
}

export interface IAdvancedInformation {
	labels: ILabel[];
	setup: ISetup;
	hospitality: string[];
}

export interface ISocialMediaLinks {
	facebook: string;
	instagram: string;
	beatport: string;
	residentAdvisor: string;
	soundCloud: string;
}

export interface IArtistDocument extends mongoose.Document {
	basicInformation: IBasicInformation;
	advancedInformation: IAdvancedInformation;
	socialMedia: ISocialMediaLinks;
	events: IEvent[];
}

export interface Artist {
	_id: string;
	createdAt: string;
	basicInformation: IBasicInformation;
	advancedInformation: IAdvancedInformation;
	socialMedia: ISocialMediaLinks;
	events: IEvent[];
}

const ArtistSchema: mongoose.Schema = new mongoose.Schema({
	createdAt: { type: String, required: true },
	basicInformation: { type: Object, required: true, unique: true },
	advancedInformation: { type: Object, required: true, unique: true },
	socialMediaLinks: { type: Object, required: true },
	events: { type: Array, required: true },
});

const ArtistModel = mongoose.model<IArtistDocument>("Artist", ArtistSchema);
export default ArtistModel;
