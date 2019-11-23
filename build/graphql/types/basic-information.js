"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.BasicInformationType = new graphql_1.GraphQLObjectType({
    name: "BasicInformation",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        logoUrl: { type: graphql_1.GraphQLString },
        coverImageUrl: { type: graphql_1.GraphQLString },
        profileImageUrl: { type: graphql_1.GraphQLString }
    })
});
exports.BasicInformationInput = new graphql_1.GraphQLInputObjectType({
    name: "BasicInformationInput",
    fields: () => ({
        name: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        description: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        logoUrl: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        coverImageUrl: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        profileImageUrl: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
    })
});
//# sourceMappingURL=basic-information.js.map