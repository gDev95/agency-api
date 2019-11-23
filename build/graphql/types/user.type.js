"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "User",
    fields: () => ({
        email: { type: graphql_1.GraphQLID },
        accessToken: { type: graphql_1.GraphQLString },
        refreshToken: { type: graphql_1.GraphQLString },
        tokenExpiresIn: { type: graphql_1.GraphQLString }
    })
});
//# sourceMappingURL=user.type.js.map