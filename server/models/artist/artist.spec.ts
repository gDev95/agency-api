import * as mongoose from "mongoose";
import ArtistSchema, { IArtistDocument } from "./artist.model";
import { fakeArtist } from "../../fake-data/fakeArtists";
describe("Artist model", () => {
	beforeAll(async () => {
		await mongoose.connect("mongodb://127.0.0.1:27017/jest", {
			useNewUrlParser: true
		});
	});

	afterAll(async () => {
		mongoose.connection.close();
	});

	it("Should throw validation errors", () => {
		const artist = new ArtistSchema();

		expect(artist.validate).toThrow();
	});

	it("Should save an Artist", async () => {
		const artist: IArtistDocument = new ArtistSchema(fakeArtist);
		const spy = jest.spyOn(artist, "get");

		expect(artist.basicInformation.name).toBe("Test 1");
	});
});
