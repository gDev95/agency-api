"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const fakeArtist = {
    id: 1,
    bio: {
        name: "Test 1",
        hometown: "berlin"
    },
    socialMediaLinks: {
        facebook: "",
        instagram: "",
        beatport: "",
        residentAdvisor: "",
        soundCloud: ""
    },
    events: [
        {
            time: {
                start: "Start Time",
                end: "End Time"
            },
            location: "XXX",
            city: "Berlin",
            facebookEventLink: "",
            residentAdvisor: ""
        }
    ]
};
const fakeArtistDatabase = [fakeArtist];
const EventTimeType = new graphql_1.GraphQLObjectType({
    name: "EventTime",
    fields: () => ({
        start: { type: graphql_1.GraphQLString },
        end: { type: graphql_1.GraphQLString }
    })
});
const EventType = new graphql_1.GraphQLObjectType({
    name: "Event",
    fields: () => ({
        time: { type: EventTimeType },
        location: { type: graphql_1.GraphQLString },
        city: { type: graphql_1.GraphQLString },
        facebookEventLink: { type: graphql_1.GraphQLString },
        residentAdvisorLink: { type: graphql_1.GraphQLString }
    })
});
const SocialMediaType = new graphql_1.GraphQLObjectType({
    name: "SocialMedia",
    fields: () => ({
        facebook: { type: graphql_1.GraphQLString },
        instagram: { type: graphql_1.GraphQLString },
        soundCloud: { type: graphql_1.GraphQLString },
        beatport: { type: graphql_1.GraphQLString },
        residentAdvisor: { type: graphql_1.GraphQLString }
    })
});
const BiographyType = new graphql_1.GraphQLObjectType({
    name: "Biography",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        hometown: { type: graphql_1.GraphQLString }
    })
});
const ArtistType = new graphql_1.GraphQLObjectType({
    name: "Artist",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        bio: { type: BiographyType },
        socialMediaLinks: { type: SocialMediaType },
        events: { type: graphql_1.GraphQLList(EventType) }
    })
});
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        artist: {
            type: ArtistType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return fakeArtistDatabase.find(artist => {
                    return artist.id == args.id;
                });
            }
        }
    }
});
const testQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        test: {
            type: graphql_1.GraphQLString,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return args.id;
            }
        }
    }
});
const Schema = new graphql_1.GraphQLSchema({
    query: testQuery
});
exports.default = Schema;
