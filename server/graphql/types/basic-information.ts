import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLBoolean
} from "graphql";

export const BasicInformation = new GraphQLObjectType({
	name: "BasicInformation",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLNonNull(GraphQLString) },
		logoUrl: { type: GraphQLNonNull(GraphQLString) },
		coverImageUrl: { type: GraphQLNonNull(GraphQLString) },
		profileImageUrl: { type: GraphQLNonNull(GraphQLString) },
		isDraft: { type: GraphQLNonNull(GraphQLBoolean) },
	})
});

export const BasicInformationInput = new GraphQLInputObjectType({
	name: "BasicInformationInput",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLNonNull(GraphQLString) },
		logoUrl: { type: GraphQLNonNull(GraphQLString) },
		coverImageUrl: { type: GraphQLNonNull(GraphQLString) },
		profileImageUrl: { type: GraphQLNonNull(GraphQLString) },
		isDraft: { type: GraphQLNonNull(GraphQLBoolean) }
	})
});
