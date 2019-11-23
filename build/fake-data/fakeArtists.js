"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeArtist = {
    id: 1,
    createdAt: "2019-01-01",
    basicInformation: {
        name: "Test 1",
        description: "Some description",
        logoUrl: "http://image.com",
        coverImageUrl: "http://image.com",
        profileImageUrl: "http://image.com"
    },
    advancedInformation: {
        labels: [{ logoUrl: "http://image.com", link: "www.test.com" }],
        rider: {
            equipment: ["speakers"],
            equipmentImageUrl: "http://image.com"
        },
        hospitality: ["free drinks"]
    },
    socialMedia: {
        facebook: "",
        instagram: "",
        beatport: "",
        residentAdvisor: "",
        soundCloud: ""
    },
    events: [
        {
            time: {
                start: "Start Time",
                end: "End Time"
            },
            location: "XXX",
            city: "Berlin",
            facebookEventLink: "",
            residentAdvisor: ""
        }
    ]
};
exports.fakeArtistData = [exports.fakeArtist];
//# sourceMappingURL=fakeArtists.js.map