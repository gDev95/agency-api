import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull,
} from "graphql";

export const NewsType = new GraphQLObjectType({
	name: "News",
	fields: () => ({
		link: { type: GraphQLNonNull(GraphQLString) },
		logo: { type: GraphQLNonNull(GraphQLString) },
	}),
});

export const NewsInput = new GraphQLInputObjectType({
	name: "NewsInput",
	fields: () => ({
		link: { type: GraphQLNonNull(GraphQLString) },
		logo: { type: GraphQLNonNull(GraphQLString) },
	}),
});
