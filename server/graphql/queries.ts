import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLList,
	GraphQLString,
	GraphQLObjectType,
} from "graphql";

import ArtistModel from "../models/artist/artist.model";

import { ArtistType } from "./types/artist.type";
import { UserType } from "./types/user.type";
import { resolve } from "dns";
import { NewsType } from "./types/news.type";
import NewsModel from "../models/news/news.model";

export const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		artist: {
			type: ArtistType,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			async resolve(parent: any, args: any) {
				const artist = await ArtistModel.findById(args.id);
				return artist;
			},
		},
		artists: {
			type: new GraphQLList(ArtistType),
			async resolve() {
				const artists = await ArtistModel.find({});
				return artists;
			},
		},
		news: {
			type: new GraphQLList(NewsType),
			async resolve() {
				const news = await NewsModel.find({});
				return news;
			},
		},
		singleNews: {
			type: NewsType,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			async resolve(parent: any, args: any) {
				const news = await NewsModel.findById(args.id);
				return news;
			},
		},
		me: {
			type: UserType,
			args: {
				email: { type: GraphQLNonNull(GraphQLString) },
				password: { type: GraphQLNonNull(GraphQLString) },
			},
			resolve(parent: any, args) {
				console.log("Bla bla");
			},
		},
	},
});
