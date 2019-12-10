import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		email: { type: GraphQLString },
		token: { type: GraphQLString }
	})
});
