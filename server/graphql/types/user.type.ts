import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
	name: "User",
	fields: () => ({
		email: { type: GraphQLID },
		accessToken: { type: GraphQLString },
		refreshToken: { type: GraphQLString },
		tokenExpiresIn: { type: GraphQLString }
	})
});
