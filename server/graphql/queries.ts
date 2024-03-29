import {
	GraphQLNonNull,
	GraphQLID,
	GraphQLList,
	GraphQLString,
	GraphQLObjectType,
	GraphQLBoolean
} from "graphql";

import ArtistModel from "../models/artist/artist.model";
import NewsModel from "../models/news/news.model";
import PageContentModel from '../models/pageContent/pageContent.model';

import { Artist } from "./types/artist.type";
import { News } from "./types/news.type";
import { PageContent } from "./types/pageContent.type";
import { UserType } from "./types/user.type";

export const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		artist: {
			type: Artist,
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			async resolve(parent: any, args: any) {
				const artist = await ArtistModel.findById(args.id);
				return artist;
			}
		},
		artists: {
			args: { isDraft: { type: GraphQLBoolean } },
			type: new GraphQLList(Artist),
			async resolve(parent: any, args: any) {
				let artists;
				if (typeof (args.isDraft) !== 'boolean') {
					artists = await ArtistModel.find()
					return artists;
				}

				artists = await ArtistModel.find({ "basicInformation.isDraft": args.isDraft })

				return artists;
			}
		},
		newsPost: {
			args: { id: { type: GraphQLNonNull(GraphQLID) } },
			type: News,
			async resolve(parent: any, args: any) {

				return await NewsModel.findById(args.id);
			}
		},
		news: {
			args: { },
			type: new GraphQLList(News),
			async resolve() {

				return await NewsModel.find();
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
		},
		pageContent: {
			type: PageContent,
			args: { id: { type: GraphQLNonNull(GraphQLID)}},
			async resolve(parent: any, args: any){
				return await PageContentModel.findById(args.id);
			}
		}
	}
});
