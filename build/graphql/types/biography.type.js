"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.BiographyType = new graphql_1.GraphQLObjectType({
    name: "Biography",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        hometown: { type: graphql_1.GraphQLString }
    })
});
exports.BiographyInput = new graphql_1.GraphQLInputObjectType({
    name: "BiographyInput",
    fields: () => ({
        name: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        hometown: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        description: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        profileImageUrl: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
    })
});
//# sourceMappingURL=biography.type.js.map