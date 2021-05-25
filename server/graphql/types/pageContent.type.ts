import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const Content = new GraphQLObjectType({
	name: "Content",
	fields: () => ({
		en: { type:GraphQLNonNull(GraphQLString) },
        es: { type: GraphQLNonNull(GraphQLString) },
	})
});

export const ContentInput = new GraphQLInputObjectType({
	name: "ContentInput",
	fields: () => ({
		en: { type: GraphQLNonNull(GraphQLString) },
        es: { type: GraphQLNonNull(GraphQLString) },
	})
});

export const PageContentSocialMedia = new GraphQLObjectType({
	name: "PageContentSocialMedia",
	fields: () => ({
		facebook: { type: GraphQLNonNull(GraphQLString) },
        instagram: { type: GraphQLNonNull(GraphQLString) },
        soundCloud: { type: GraphQLNonNull(GraphQLString) },
	})
});

export const PageContentSocialMediaInput = new GraphQLInputObjectType({
	name: "PageContentSocialMediaInput",
	fields: () => ({
		facebook: { type: GraphQLString },
        instagram: { type: GraphQLString },
        soundCloud: { type: GraphQLString },
	})
});

export const ContactDetails = new GraphQLObjectType({
	name: "ContactDetails",
	fields: () => ({
		email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },

	})
});

export const ContactDetailsInput = new GraphQLInputObjectType({
	name: "ContactDetailsInput",
	fields: () => ({
		email: { type: GraphQLNonNull(GraphQLString) },
        phone: { type: GraphQLNonNull(GraphQLString) },

	})
});

export const PageContent = new GraphQLObjectType({
	name: "PageContent",
	fields: () => ({
		lastModified: { type: GraphQLNonNull(GraphQLString) },
		slogan: { type: GraphQLNonNull(Content) },
		mission: { type: GraphQLNonNull(Content) },
		socialMedia: { type: GraphQLNonNull(PageContentSocialMedia) },
		contactDetails: { type: GraphQLNonNull(ContactDetails)}
	})
});

export const PageContentInput = new GraphQLInputObjectType({
	name: "PageContentInput",
	fields: () => ({
        lastModified: { type: GraphQLNonNull(GraphQLString) },
		slogan: { type: GraphQLNonNull(ContentInput) },
		mission: { type: GraphQLNonNull(ContentInput) },
		socialMedia: { type: GraphQLNonNull(PageContentSocialMediaInput) },
		contactDetails: { type: GraphQLNonNull(ContactDetailsInput)}
	})
});