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
	BasicInformationType,
	BasicInformationInput
} from "./basic-information";
import { EventType, EventInput } from "./event.type";
import { SocialMediaType, SocialMediaInput } from "./social-media.type";
import {
	AdvancedInformationType,
	AdvancedInformationInput
} from "./advanced-information.type";

export const ArtistType = new GraphQLObjectType({
	name: "Artist",
	fields: () => ({
		id: { type: GraphQLID },
		createdAt: { type: GraphQLString },
		basicInformation: { type: BasicInformationType },
		advancedInformation: { type: AdvancedInformationType },
		socialMediaLinks: { type: SocialMediaType },
		events: { type: GraphQLList(EventType) }
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
