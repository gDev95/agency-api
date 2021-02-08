import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull
} from "graphql";

export const BasicInformationType = new GraphQLObjectType({
	name: "BasicInformation",
	fields: () => ({
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		logoUrl: { type: GraphQLString },
		coverImageUrl: { type: GraphQLString },
		profileImageUrl: { type: GraphQLString }
	})
});

export const BasicInformationInput = new GraphQLInputObjectType({
	name: "BasicInformationInput",
	fields: () => ({
		name: { type: GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLNonNull(GraphQLString) },
		logoUrl: { type: GraphQLString },
		coverImageUrl: { type: GraphQLString },
		profileImageUrl: { type: GraphQLString }
	})
});
