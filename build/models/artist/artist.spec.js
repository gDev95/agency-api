"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose = require("mongoose");
const artist_model_1 = require("./artist.model");
const fakeArtists_1 = require("../../fake-data/fakeArtists");
describe("Artist model", () => {
    beforeAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect("mongodb://127.0.0.1:27017/jest", {
            useNewUrlParser: true
        });
    }));
    afterAll(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        mongoose.connection.close();
    }));
    it("Should throw validation errors", () => {
        const artist = new artist_model_1.default();
        expect(artist.validate).toThrow();
    });
    it("Should save an Artist", () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const artist = new artist_model_1.default(fakeArtists_1.fakeArtist);
        const spy = jest.spyOn(artist, "get");
        expect(artist.basicInformation.name).toBe("Test 1");
    }));
});
//# sourceMappingURL=artist.spec.js.map