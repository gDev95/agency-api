import { GraphQLID, GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const ContentType = new GraphQLObjectType({
	name: "ContentType",
	fields: () => ({
		en: { type: GraphQLString },
        es: { type: GraphQLString },
	})
});
export const PageContentSocialMediaType = new GraphQLObjectType({
	name: "PageContentSocialMediaType",
	fields: () => ({
		facebook: { type: GraphQLString },
        instagram: { type: GraphQLString },
        soundcloud: { type: GraphQLString },
	})
});

export const ContentInputType = new GraphQLInputObjectType({
	name: "ContentInputType",
	fields: () => ({
		en: { type: GraphQLNonNull(GraphQLString) },
        es: { type: GraphQLNonNull(GraphQLString) },
	})
});
export const PageContentSocialMediaInputType = new GraphQLInputObjectType({
	name: "PageContentSocialMediaInputType",
	fields: () => ({
		facebook: { type: GraphQLString },
        instagram: { type: GraphQLString },
        soundcloud: { type: GraphQLString },
	})
});

export const PageContentType = new GraphQLObjectType({
	name: "PageContent",
	fields: () => ({
		lastModified: { type: GraphQLString },
		slogan: { type: ContentType },
		mission: { type: ContentType },
		socialMedia: { type: PageContentSocialMediaType },
	})
});

export const PageContentInput = new GraphQLInputObjectType({
	name: "PageContentInput",
	fields: () => ({
        lastModified: { type: GraphQLNonNull(GraphQLString) },
		slogan: { type: GraphQLNonNull(ContentInputType) },
		mission: { type: GraphQLNonNull(ContentInputType) },
		socialMedia: { type: GraphQLNonNull(PageContentSocialMediaInputType) },
	})
});