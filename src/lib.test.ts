import { addition } from "./lib";

describe("Lib: addition function", () => {

  it("return correct value", () => {
    expect(addition(2, 3)).toEqual(5);
  });

  it.todo("return null if one of the value is null");
});
