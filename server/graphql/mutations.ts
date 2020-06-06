import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLString,
	GraphQLObjectType,
} from "graphql";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import ArtistModel from "../models/artist/artist.model";
import UserModel from "../models/user/user.model";

import {
	ArtistType,
	AddArtistInput,
	EditArtistInput,
} from "./types/artist.type";
import { UserType } from "./types/user.type";

export const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addArtist: {
			type: ArtistType,
			args: {
				artist: { type: GraphQLNonNull(AddArtistInput) },
			},
			resolve: (root: any, args: any, context: any, info: any) => {
				const artist = new ArtistModel({ ...args.artist });
				return artist.save();
			},
		},
		updateArtist: {
			type: ArtistType,
			args: {
				id: { type: GraphQLID },
				artist: { type: GraphQLNonNull(EditArtistInput) },
			},
			resolve: async (root: any, args: any, context: any, info: any) => {
				console.log("ARGS:", args);
				const artist = await ArtistModel.findByIdAndUpdate(
					args.id,
					{
						...args.artist,
					},
					{ new: true }
				);
				return artist;
			},
		},
		deleteArtist: {
			type: ArtistType,
			args: {
				id: { type: GraphQLID },
			},
			resolve: async (root: any, args: any, context: any, info: any) => {
				const artist = await ArtistModel.findByIdAndDelete(args.id);
				return artist;
			},
		},
		login: {
			type: UserType,
			args: {
				email: { type: GraphQLNonNull(GraphQLString) },
				password: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve: async (root: any, args: any, context: any, info: any) => {
				const user = await UserModel.findOne({
					email: args.email,
				});
				// TODO: FIX THIS
				if (user) {
					if (true) {
						const token = await jwt.sign(
							{
								data: "foobar",
							},
							"secret",
							{ expiresIn: "1h" }
						);

						return { token, email: args.email };
					}
				} else {
					throw new Error("Could not find user or invalid password");
				}
			},
		},
	},
});
