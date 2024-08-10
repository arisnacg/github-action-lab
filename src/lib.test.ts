import { addition, multiplication } from "./lib";

describe("Lib: addition function", () => {
	it("return correct value", () => {
		expect(addition(2, 3)).toEqual(5);
	});
});

describe("Lib: multiplication function", () => {
	it("return correct value", () => {
		expect(multiplication(2, 3)).toEqual(6);
	});
});
