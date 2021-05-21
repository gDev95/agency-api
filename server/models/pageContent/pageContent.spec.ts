import * as mongoose from "mongoose";
import PageContentSchema, { IPageContentDocument, IPageContent } from "./pageContent.model";

const fakePageContent: IPageContent = {
    _id: "some fake id" ,
    lastModified: 'today',
    slogan: { en: "english", es: "spanish"},
    mission: { en: 'english', es: "spanish"},
    socialMedia: { facebook: "facebook", instagram: "instagram", soundcloud: "soundcloud"}
}

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
		const pageContent = new PageContentSchema();

		expect(pageContent.validate).toThrow();
	});

	it("Should save an Artist", async () => {
		const pageContent: IPageContentDocument = new PageContentSchema(fakePageContent);
		const spy = jest.spyOn(pageContent, "get");

		expect(pageContent.lastModified).toBe("today");
        expect(pageContent.slogan.en).toBe("english");
        expect(pageContent.slogan.es).toBe("spanish");
        expect(pageContent.mission.en).toBe("english");
        expect(pageContent.mission.es).toBe("spanish");
        expect(pageContent.socialMedia.facebook).toBe("facebook");
        expect(pageContent.socialMedia.instagram).toBe("instagram");
        expect(pageContent.socialMedia.soundcloud).toBe("soundcloud");
	});
});
