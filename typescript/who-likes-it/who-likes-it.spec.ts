import { describe, it, expect } from "@jest/globals";
import { likes } from "./who-likes-it";

describe("likes function formats name lists correctly", () => {
  it("should return 'no one likes this' when no names are provided", () => {
    const names: string[] = [];
    const likesText = "no one likes this";

    const result = likes(names);

    expect(result).toBe(likesText);
  });

  it("should return '{name} likes this' when one name is provided", () => {
    const names: string[] = ["Peter"];
    const likesText = "Peter likes this";

    const result = likes(names);

    expect(result).toBe(likesText);
  });

  it("should return '{name1} and {name2} like this' when two names are provided", () => {
    const names: string[] = ["Jacob", "Alex"];
    const likesText = "Jacob and Alex like this";

    const result = likes(names);

    expect(result).toBe(likesText);
  });

  it("should return '{name1}, {name2} and {name3} like this' when three names are provided", () => {
    const names: string[] = ["Max", "John", "Mark"];
    const likesText = "Max, John and Mark like this";

    const result = likes(names);

    expect(result).toBe(likesText);
  });

  it("should return '{name1}, {name2} and {n} others like this' when more than three names are provided", () => {
    const names: string[] = ["Alex", "Jacob", "Mark", "Max"];
    const likesText = "Alex, Jacob and 2 others like this";

    const result = likes(names);

    expect(result).toBe(likesText);
  });
});
