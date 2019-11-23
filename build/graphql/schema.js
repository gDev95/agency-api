"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const graphql_1 = require("graphql");
const artist_model_1 = require("../models/artist/artist.model");
const artist_type_1 = require("./types/artist.type");
const user_type_1 = require("./types/user.type");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        artist: {
            type: artist_type_1.ArtistType,
            args: { id: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLID) } },
            resolve(parent, args) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const artist = yield artist_model_1.default.findById(args.id);
                    return artist;
                });
            }
        },
        artists: {
            type: new graphql_1.GraphQLList(artist_type_1.ArtistType),
            resolve(parent, args) {
                return tslib_1.__awaiter(this, void 0, void 0, function* () {
                    const artists = yield artist_model_1.default.find({});
                    return artists;
                });
            }
        },
        me: {
            type: user_type_1.UserType,
            args: {
                email: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                password: { type: graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve(parent, args) {
                console.log("Bla bla");
            }
        }
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        addArtist: {
            type: artist_type_1.ArtistType,
            args: {
                artist: { type: graphql_1.GraphQLNonNull(artist_type_1.AddArtistInput) }
            },
            resolve: (root, args, context, info) => {
                const artist = new artist_model_1.default(Object.assign({}, args.artist));
                return artist.save();
            }
        },
        updateArtist: {
            type: artist_type_1.ArtistType,
            args: {
                id: { type: graphql_1.GraphQLID },
                artist: { type: graphql_1.GraphQLNonNull(artist_type_1.EditArtistInput) }
            },
            resolve: (root, args, context, info) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                console.log("ARGS:", args);
                const artist = yield artist_model_1.default.findByIdAndUpdate(args.id, Object.assign({}, args.artist), { new: true });
                return artist;
            })
        },
        deleteArtist: {
            type: artist_type_1.ArtistType,
            args: {
                id: { type: graphql_1.GraphQLID }
            },
            resolve: (root, args, context, info) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const artist = yield artist_model_1.default.findByIdAndDelete(args.id);
                return artist;
            })
        }
    }
});
const Schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
exports.default = Schema;
//# sourceMappingURL=schema.js.map