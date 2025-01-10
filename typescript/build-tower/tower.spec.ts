import { it, describe, expect } from "vitest";
import { towerBuilder } from "./tower";

describe("test tower builder", () => {
  const goodResult = {
    size: 3,
    stringArray: ["  *  ", " *** ", "*****"],
  };

  it("should build array level 3", () => {
    expect(towerBuilder(goodResult.size)).toStrictEqual(goodResult.stringArray);
  });

  it("should give back empty array with 0", () => {
    expect(towerBuilder(0).length).toBe(0);
  });
});
