import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
} from "graphql";

export const SocialMediaType = new GraphQLObjectType({
	name: "SocialMediaLinks",
	fields: () => ({
		facebook: { type: GraphQLString },
		instagram: { type: GraphQLString },
		soundCloud: { type: GraphQLString },
		beatport: { type: GraphQLString },
		residentAdvisor: { type: GraphQLString },
	}),
});

export const SocialMediaInput = new GraphQLInputObjectType({
	name: "SocialMediaInput",
	fields: () => ({
		facebook: { type: GraphQLString },
		instagram: { type: GraphQLString },
		soundCloud: { type: GraphQLString },
		beatport: { type: GraphQLString },
		residentAdvisor: { type: GraphQLString },
	}),
});
