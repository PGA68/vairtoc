import { test, expect, mock, describe, beforeEach, afterEach  } from "bun:test";

const random = mock(() => Math.random());

test("First test", async () => {
    expect()
});
test("random", async () => {
    const val = random();
    expect(val).toBeGreaterThan(0);
    expect(random).toHaveBeenCalled();
    expect(random).toHaveBeenCalledTimes(1);
  });
describe("arithmetic", () => {
    test("2 + 2", () => {
      expect(2 + 2).toBe(4);
    });
  
    test("2 * 2", () => {
      expect(2 * 2).toBe(4);
    });
  });
  beforeEach(() => {
    console.log("running test.");
  });
  
  afterEach(() => {
    console.log("done with test.");
  });