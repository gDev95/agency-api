"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const EventTimeType = new graphql_1.GraphQLObjectType({
    name: "EventTime",
    fields: () => ({
        start: { type: graphql_1.GraphQLString },
        end: { type: graphql_1.GraphQLString }
    })
});
const EventTimeInput = new graphql_1.GraphQLInputObjectType({
    name: "EventTimeInput",
    fields: () => ({
        start: { type: graphql_1.GraphQLString },
        end: { type: graphql_1.GraphQLString }
    })
});
exports.EventType = new graphql_1.GraphQLObjectType({
    name: "Event",
    fields: () => ({
        time: { type: EventTimeType },
        location: { type: graphql_1.GraphQLString },
        city: { type: graphql_1.GraphQLString },
        facebookEventLink: { type: graphql_1.GraphQLString },
        residentAdvisorLink: { type: graphql_1.GraphQLString }
    })
});
exports.EventInput = new graphql_1.GraphQLInputObjectType({
    name: "EventInput",
    fields: () => ({
        time: { type: EventTimeInput },
        location: { type: graphql_1.GraphQLString },
        city: { type: graphql_1.GraphQLString },
        facebookEventLink: { type: graphql_1.GraphQLString },
        residentAdvisorLink: { type: graphql_1.GraphQLString }
    })
});
//# sourceMappingURL=event.type.js.map