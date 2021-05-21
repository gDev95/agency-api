import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} from "graphql";

const Label = new GraphQLObjectType({
	name: "Label",
	fields: () => ({
		logoUrl: { type: GraphQLString },
		link: { type: GraphQLString },
	}),
});

const Setup = new GraphQLObjectType({
	name: "Setup",
	fields: () => ({
		equipment: { type: GraphQLList(GraphQLString) },
		equipmentImageUrl: { type: GraphQLString },
	}),
});

const LabelInput = new GraphQLInputObjectType({
	name: "LabelInput",
	fields: () => ({
		logoUrl: { type: GraphQLString },
		link: { type: GraphQLString },
	}),
});

const SetupInput = new GraphQLInputObjectType({
	name: "SetupInput",
	fields: () => ({
		equipment: { type: GraphQLList(GraphQLString) },
		equipmentImageUrl: { type: GraphQLString },
	}),
});

export const AdvancedInformation = new GraphQLObjectType({
	name: "AdvancedInformation",
	fields: () => ({
		labels: { type: GraphQLList(Label) },
		setup: { type: Setup },
		hospitality: { type: GraphQLList(GraphQLString) },
	}),
});

export const AdvancedInformationInput = new GraphQLInputObjectType({
	name: "AdvancedInformationInput",
	fields: () => ({
		labels: { type: GraphQLNonNull(GraphQLList(LabelInput)) },
		setup: { type: GraphQLNonNull(SetupInput) },
		hospitality: { type: GraphQLNonNull(GraphQLList(GraphQLString)) },
	}),
});
