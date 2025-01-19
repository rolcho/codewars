import { towerBuilder } from "./tower.ts";
import { assertEquals } from "@std/assert/equals";

Deno.test("test tower builder good result", () => {
  const goodResult = {
    size: 3,
    stringArray: ["  *  ", " *** ", "*****"],
  };
  assertEquals(towerBuilder(goodResult.size), goodResult.stringArray);
});

Deno.test("test 0 height to be empty", () => {
  assertEquals(towerBuilder(0).length, 1);
});
