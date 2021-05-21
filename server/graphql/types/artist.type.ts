import {
	GraphQLObjectType,
	GraphQLList,
	GraphQLID,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLBoolean
} from "graphql";
import {
	BasicInformation,
	BasicInformationInput
} from "./basic-information";
import { Event, EventInput } from "./event.type";
import { SocialMediaType, SocialMediaInput } from "./social-media.type";
import {
	AdvancedInformation,
	AdvancedInformationInput
} from "./advanced-information.type";

export const Artist = new GraphQLObjectType({
	name: "Artist",
	fields: () => ({
		id: { type: GraphQLID },
		createdAt: { type: GraphQLString },
		basicInformation: { type: BasicInformation },
		advancedInformation: { type: AdvancedInformation },
		socialMediaLinks: { type: SocialMediaType },
		events: { type: GraphQLList(Event) }
	})
});

export const AddArtistInput = new GraphQLInputObjectType({
	name: "AddArtistInput",
	fields: () => ({
		createdAt: { type: GraphQLNonNull(GraphQLString) },
		basicInformation: { type: GraphQLNonNull(BasicInformationInput) },
		advancedInformation: { type: GraphQLNonNull(AdvancedInformationInput) },
		socialMediaLinks: { type: SocialMediaInput },
		events: { type: GraphQLNonNull(GraphQLList(EventInput)) }
	})
});

export const EditArtistInput = new GraphQLInputObjectType({
	name: "EditArtistInput",
	fields: () => ({
		basicInformation: { type: GraphQLNonNull(BasicInformationInput) },
		advancedInformation: { type: GraphQLNonNull(AdvancedInformationInput) },
		socialMediaLinks: { type: SocialMediaInput },
	})
});
