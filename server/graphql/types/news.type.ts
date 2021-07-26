import { graphql, GraphQLBoolean, GraphQLID, GraphQLInputObjectType, GraphQLObjectType, GraphQLString } from "graphql";

export const News = new GraphQLObjectType({
	name: "News",
	fields: () => ({
        id: { type: GraphQLID },
		createdAt: { type: GraphQLString },
		imageUrl: { type: GraphQLString },
		externalLink: { type: GraphQLString },
        title: { type: GraphQLString },
		videoLink: { type: GraphQLString}
	})
});

export const NewsInput = new GraphQLInputObjectType({
	name: "NewsInput",
	fields: () => ({
		imageUrl: { type: GraphQLString },
		externalLink: { type: GraphQLString },
        title: { type: GraphQLString },
		videoLink: { type: GraphQLString}
	})
});