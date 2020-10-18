import * as mongoose from "mongoose";
import NewsSchema, { INewsDocument } from "./news.model";
import { fakeNews } from "../../fake-data/fakeNews";
describe("News model", () => {
	beforeAll(async () => {
		await mongoose.connect("mongodb://127.0.0.1:27017/jest", {
			useNewUrlParser: true,
		});
	});

	afterAll(async () => {
		mongoose.connection.close();
	});

	it("Should throw validation errors", () => {
		const news = new NewsSchema();

		expect(news.validate).toThrow();
	});

	it("Should save News Entry", async () => {
		const news: INewsDocument = new NewsSchema(fakeNews);
		const spy = jest.spyOn(news, "get");

		expect(news.link).toBe("newsLink");
		expect(news.logo).toBe("newsLogo");
	});
});
