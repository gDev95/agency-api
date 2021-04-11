import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLList,
	GraphQLString,
	GraphQLObjectType,
	GraphQLBoolean
} from "graphql";

import ArtistModel from "../models/artist/artist.model";

import { ArtistType } from "./types/artist.type";
import { UserType } from "./types/user.type";

export const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		artist: {
			type: ArtistType,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			async resolve(parent: any, args: any) {
				const artist = await ArtistModel.findById(args.id);
				return artist;
			}
		},
		artists: {
			args: { isDraft: { type: GraphQLBoolean }},
			type: new GraphQLList(ArtistType),
			async resolve(parent: any, args: any) {
				const artists = await ArtistModel.find({ "basicInformation.isDraft": args.isDraft });
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
