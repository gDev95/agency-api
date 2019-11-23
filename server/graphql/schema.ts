import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
	GraphQLString
} from "graphql";

import ArtistModel, { IEvent } from "../models/artist/artist.model";
import {
	ArtistType,
	AddArtistInput,
	EditArtistInput
} from "./types/artist.type";
import { UserType } from "./types/user.type";

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		artist: {
			type: ArtistType,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			async resolve(parent: any, args) {
				const artist = await ArtistModel.findById(args.id);
				return artist;
			}
		},
		artists: {
			type: new GraphQLList(ArtistType),
			async resolve(parent: any, args) {
				const artists = await ArtistModel.find({});
				return artists;
			}
		},
		me: {
			type: UserType,
			args: {
				email: { type: GraphQLNonNull(GraphQLString) },
				password: { type: GraphQLNonNull(GraphQLString) }
			},
			resolve(parent: any, args) {
				console.log("Bla bla");
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addArtist: {
			type: ArtistType,
			args: {
				artist: { type: GraphQLNonNull(AddArtistInput) }
			},
			resolve: (root, args, context, info) => {
				const artist = new ArtistModel({ ...args.artist });
				return artist.save();
			}
		},
		updateArtist: {
			type: ArtistType,
			args: {
				id: { type: GraphQLID },
				artist: { type: GraphQLNonNull(EditArtistInput) }
			},
			resolve: async (root, args, context, info) => {
				console.log("ARGS:", args);
				const artist = await ArtistModel.findByIdAndUpdate(
					args.id,
					{
						...args.artist
					},
					{ new: true }
				);
				return artist;
			}
		},
		deleteArtist: {
			type: ArtistType,
			args: {
				id: { type: GraphQLID }
			},
			resolve: async (root, args, context, info) => {
				const artist = await ArtistModel.findByIdAndDelete(args.id);
				return artist;
			}
		}
	}
});

const Schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});

export default Schema;
