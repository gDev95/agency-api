"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.SocialMediaType = new graphql_1.GraphQLObjectType({
    name: "SocialMediaLinks",
    fields: () => ({
        facebook: { type: graphql_1.GraphQLString },
        instagram: { type: graphql_1.GraphQLString },
        soundCloud: { type: graphql_1.GraphQLString },
        beatport: { type: graphql_1.GraphQLString },
        residentAdvisor: { type: graphql_1.GraphQLString }
    })
});
exports.SocialMediaInput = new graphql_1.GraphQLInputObjectType({
    name: "SocialMediaInput",
    fields: () => ({
        facebook: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        instagram: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        soundCloud: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        beatport: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        residentAdvisor: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
    })
});
//# sourceMappingURL=social-media.type.js.map