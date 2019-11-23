import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull
} from "graphql";

export const SocialMediaType = new GraphQLObjectType({
	name: "SocialMediaLinks",
	fields: () => ({
		facebook: { type: GraphQLString },
		instagram: { type: GraphQLString },
		soundCloud: { type: GraphQLString },
		beatport: { type: GraphQLString },
		residentAdvisor: { type: GraphQLString }
	})
});

export const SocialMediaInput = new GraphQLInputObjectType({
	name: "SocialMediaInput",
	fields: () => ({
		facebook: { type: GraphQLNonNull(GraphQLString) },
		instagram: { type: GraphQLNonNull(GraphQLString) },
		soundCloud: { type: GraphQLNonNull(GraphQLString) },
		beatport: { type: GraphQLNonNull(GraphQLString) },
		residentAdvisor: { type: GraphQLNonNull(GraphQLString) }
	})
});
