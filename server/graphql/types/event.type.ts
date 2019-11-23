import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInputObjectType
} from "graphql";

const EventTimeType = new GraphQLObjectType({
	name: "EventTime",
	fields: () => ({
		start: { type: GraphQLString },
		end: { type: GraphQLString }
	})
});

const EventTimeInput = new GraphQLInputObjectType({
	name: "EventTimeInput",
	fields: () => ({
		start: { type: GraphQLString },
		end: { type: GraphQLString }
	})
});

export const EventType = new GraphQLObjectType({
	name: "Event",
	fields: () => ({
		time: { type: EventTimeType },
		location: { type: GraphQLString },
		city: { type: GraphQLString },
		facebookEventLink: { type: GraphQLString },
		residentAdvisorLink: { type: GraphQLString }
	})
});

export const EventInput = new GraphQLInputObjectType({
	name: "EventInput",
	fields: () => ({
		time: { type: EventTimeInput },
		location: { type: GraphQLString },
		city: { type: GraphQLString },
		facebookEventLink: { type: GraphQLString },
		residentAdvisorLink: { type: GraphQLString }
	})
});
