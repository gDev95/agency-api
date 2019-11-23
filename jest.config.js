module.exports = {
	transform: {
		"^.+\\.ts?$": "ts-jest"
	},
	testEnvironment: "node",
	roots: ["<rootDir>/server"],
	moduleFileExtensions: ["ts", "js", "json", "node"],
	preset: "ts-jest"
};
