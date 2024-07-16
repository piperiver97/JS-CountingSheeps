import { describe, it, expect } from "vitest";
import { countSheeps } from "../js/app.js";

describe("countSheeps", () => {
  it("if the list return  true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true the output should return There are 17 sheep in total", () => {
    const list = [
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
    ];
    const result = countSheeps(list);

    expect(result).toEqual("There are 17 sheeps in total");
  });

  it("if the list return  false,  false,  false  the output should return  UPS!!! Wolfs eaten Sheeps", () => {
    const list = [false, false, false];
    const result = countSheeps(list);

    expect(result).toEqual("UPS!!! Wolfs eaten Sheeps");
  });
});