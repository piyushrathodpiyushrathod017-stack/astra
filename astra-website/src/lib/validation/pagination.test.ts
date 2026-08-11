import { describe, it, expect } from "vitest";
import {
  paginationSchema,
  getPaginationParams,
  getOffset,
  getTotalPages,
} from "@/lib/validation/pagination";

describe("paginationSchema", () => {
  it("applies defaults for empty input", () => {
    const result = paginationSchema.parse({});
    expect(result).toEqual({ page: 1, limit: 20, sort: "desc" });
  });

  it("parses valid input", () => {
    const result = paginationSchema.parse({ page: "2", limit: "10", sort: "asc" });
    expect(result).toEqual({ page: 2, limit: 10, sort: "asc" });
  });

  it("rejects min page", () => {
    expect(() => paginationSchema.parse({ page: "0" })).toThrow();
  });

  it("rejects max limit", () => {
    expect(() => paginationSchema.parse({ limit: "200" })).toThrow();
  });

  it("rejects min limit", () => {
    expect(() => paginationSchema.parse({ limit: "0" })).toThrow();
  });
});

describe("getPaginationParams", () => {
  it("returns parsed params", () => {
    const result = getPaginationParams({ page: "3", limit: "5" });
    expect(result.page).toBe(3);
    expect(result.limit).toBe(5);
  });
});

describe("getOffset", () => {
  it("calculates offset correctly", () => {
    expect(getOffset(1, 20)).toBe(0);
    expect(getOffset(2, 20)).toBe(20);
    expect(getOffset(3, 10)).toBe(20);
  });
});

describe("getTotalPages", () => {
  it("calculates total pages", () => {
    expect(getTotalPages(100, 20)).toBe(5);
    expect(getTotalPages(101, 20)).toBe(6);
    expect(getTotalPages(0, 20)).toBe(0);
    expect(getTotalPages(1, 20)).toBe(1);
  });
});
