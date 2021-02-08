import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList,
} from "graphql";

const LabelType = new GraphQLObjectType({
	name: "Label",
	fields: () => ({
		logoUrl: { type: GraphQLString },
		link: { type: GraphQLString },
	}),
});

const SetupType = new GraphQLObjectType({
	name: "Setup",
	fields: () => ({
		equipment: { type: GraphQLList(GraphQLString) },
		equipmentImageUrl: { type: GraphQLString },
	}),
});

const LabelInputType = new GraphQLInputObjectType({
	name: "LabelInput",
	fields: () => ({
		logoUrl: { type: GraphQLString },
		link: { type: GraphQLString },
	}),
});

const SetupInputType = new GraphQLInputObjectType({
	name: "SetupInput",
	fields: () => ({
		equipment: { type: GraphQLList(GraphQLString) },
		equipmentImageUrl: { type: GraphQLString },
	}),
});

export const AdvancedInformationType = new GraphQLObjectType({
	name: "AdvancedInformation",
	fields: () => ({
		labels: { type: GraphQLList(LabelType) },
		setup: { type: SetupType },
		hospitality: { type: GraphQLList(GraphQLString) },
	}),
});

export const AdvancedInformationInput = new GraphQLInputObjectType({
	name: "AdvancedInformationInput",
	fields: () => ({
		labels: { type: GraphQLList(LabelInputType) },
		setup: { type: SetupInputType },
		hospitality: { type: GraphQLList(GraphQLString) },
	}),
});
