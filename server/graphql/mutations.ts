import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLString,
	GraphQLObjectType,
} from "graphql";
import * as jwt from "jsonwebtoken";

import ArtistModel from "../models/artist/artist.model";
import PageContentModel from "../models/pageContent/pageContent.model";
import UserModel from "../models/user/user.model";

import {
	Artist,
	AddArtistInput,
	EditArtistInput,
} from "./types/artist.type";
import { PageContentInput, PageContent } from "./types/pageContent.type";
import { UserType } from "./types/user.type";

export const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
		addArtist: {
			type: Artist,
			args: {
				artist: { type: GraphQLNonNull(AddArtistInput) },
			},
			resolve: (root: any, args: any, context: any, info: any) => {
				const artist = new ArtistModel({ ...args.artist });
				return artist.save();
			},
		},
		updateArtist: {
			type: Artist,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
				artist: { type: GraphQLNonNull(EditArtistInput) },
			},
			resolve: async (root: any, args: any, context: any, info: any) => {
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
			type: Artist,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
			},
			resolve: async (root: any, args: any, context: any, info: any) => {
				const artist = await ArtistModel.findByIdAndDelete(args.id);
				return artist;
			},
		},
		initializePageContent: {
			type: PageContent,
			args: {},
			resolve: async (root: any, args: any, context: any, info: any) => {
				const content = new PageContentModel(
					{
						lastModified: new Date(),
						slogan: { en: "", es: ""},
						mission: {en: "", es: ""},
							socialMedia:
							{
							facebook: "",
							instagram: "",
							soundCloud: ""
						},
						contactDetails: {
							phone:"",
							email: ""
						}
					}
				);
				console.log("Content", content)
				return content.save();
			},
		},
		updatePageContent: {
			type: PageContent,
			args: {
				id: { type: GraphQLNonNull(GraphQLID) },
				pageContent: { type: GraphQLNonNull(PageContentInput) },
			},
			resolve: async (root: any, args: any, context: any, info: any) => {
				const content = await PageContentModel.findByIdAndUpdate(
					args.id,
					{
						...args.pageContent,
					},
					{ new: true }
				);
				return content;
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
