"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const basic_information_1 = require("./basic-information");
const event_type_1 = require("./event.type");
const social_media_type_1 = require("./social-media.type");
const advanced_information_type_1 = require("./advanced-information.type");
exports.ArtistType = new graphql_1.GraphQLObjectType({
    name: "Artist",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        createdAt: { type: graphql_1.GraphQLString },
        basicInformation: { type: basic_information_1.BasicInformationType },
        advancedInformation: { type: advanced_information_type_1.AdvancedInformationType },
        socialMediaLinks: { type: social_media_type_1.SocialMediaType },
        events: { type: graphql_1.GraphQLList(event_type_1.EventType) }
    })
});
exports.AddArtistInput = new graphql_1.GraphQLInputObjectType({
    name: "AddArtistInput",
    fields: () => ({
        createdAt: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        basicInformation: { type: graphql_1.GraphQLNonNull(basic_information_1.BasicInformationInput) },
        advancedInformation: { type: graphql_1.GraphQLNonNull(advanced_information_type_1.AdvancedInformationInput) },
        socialMediaLinks: { type: graphql_1.GraphQLNonNull(social_media_type_1.SocialMediaInput) },
        events: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLList(event_type_1.EventInput)) }
    })
});
exports.EditArtistInput = new graphql_1.GraphQLInputObjectType({
    name: "EditArtistInput",
    fields: () => ({
        basicInformation: { type: graphql_1.GraphQLNonNull(basic_information_1.BasicInformationInput) },
        advancedInformation: { type: graphql_1.GraphQLNonNull(advanced_information_type_1.AdvancedInformationInput) },
        socialMediaLinks: { type: graphql_1.GraphQLNonNull(social_media_type_1.SocialMediaInput) }
    })
});
//# sourceMappingURL=artist.type.js.map