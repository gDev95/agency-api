import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLList
} from "graphql";

const LabelType = new GraphQLObjectType({
	name: "Label",
	fields: () => ({
		logoUrl: { type: GraphQLString },
		link: { type: GraphQLString }
	})
});

const RiderType = new GraphQLObjectType({
	name: "Rider",
	fields: () => ({
		equipment: { type: GraphQLList(GraphQLString) },
		equipmentImageUrl: { type: GraphQLString }
	})
});

const LabelInputType = new GraphQLInputObjectType({
	name: "LabelInput",
	fields: () => ({
		logoUrl: { type: GraphQLString },
		link: { type: GraphQLString }
	})
});

const RiderInputType = new GraphQLInputObjectType({
	name: "RiderInput",
	fields: () => ({
		equipment: { type: GraphQLList(GraphQLString) },
		equipmentImageUrl: { type: GraphQLString }
	})
});

export const AdvancedInformationType = new GraphQLObjectType({
	name: "AdvancedInformation",
	fields: () => ({
		labels: { type: GraphQLList(LabelType) },
		rider: { type: RiderType },
		hospitality: { type: GraphQLList(GraphQLString) }
	})
});

export const AdvancedInformationInput = new GraphQLInputObjectType({
	name: "AdvancedInformationInput",
	fields: () => ({
		labels: { type: GraphQLNonNull(GraphQLList(LabelInputType)) },
		rider: { type: GraphQLNonNull(RiderInputType) },
		hospitality: { type: GraphQLNonNull(GraphQLList(GraphQLString)) }
	})
});
