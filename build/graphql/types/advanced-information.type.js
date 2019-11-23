"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const LabelType = new graphql_1.GraphQLObjectType({
    name: "Label",
    fields: () => ({
        logoUrl: { type: graphql_1.GraphQLString },
        link: { type: graphql_1.GraphQLString }
    })
});
const RiderType = new graphql_1.GraphQLObjectType({
    name: "Rider",
    fields: () => ({
        equipment: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) },
        equipmentImageUrl: { type: graphql_1.GraphQLString }
    })
});
const LabelInputType = new graphql_1.GraphQLInputObjectType({
    name: "LabelInput",
    fields: () => ({
        logoUrl: { type: graphql_1.GraphQLString },
        link: { type: graphql_1.GraphQLString }
    })
});
const RiderInputType = new graphql_1.GraphQLInputObjectType({
    name: "RiderInput",
    fields: () => ({
        equipment: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) },
        equipmentImageUrl: { type: graphql_1.GraphQLString }
    })
});
exports.AdvancedInformationType = new graphql_1.GraphQLObjectType({
    name: "AdvancedInformation",
    fields: () => ({
        labels: { type: graphql_1.GraphQLList(LabelType) },
        rider: { type: RiderType },
        hospitality: { type: graphql_1.GraphQLList(graphql_1.GraphQLString) }
    })
});
exports.AdvancedInformationInput = new graphql_1.GraphQLInputObjectType({
    name: "AdvancedInformationInput",
    fields: () => ({
        labels: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLList(LabelInputType)) },
        rider: { type: graphql_1.GraphQLNonNull(RiderInputType) },
        hospitality: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLList(graphql_1.GraphQLString)) }
    })
});
//# sourceMappingURL=advanced-information.type.js.map