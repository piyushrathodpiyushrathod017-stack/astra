import { describe, it, expect, vi, afterEach } from "vitest";
import { logger } from "@/lib/logger";

describe("logger", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("has all log levels", () => {
    expect(typeof logger.info).toBe("function");
    expect(typeof logger.warn).toBe("function");
    expect(typeof logger.error).toBe("function");
    expect(typeof logger.debug).toBe("function");
  });

  it("info logs without error", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logger.info("test message");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("warn logs without error", () => {
    const spy = vi.spyOn(console, "warn").mockImplementation(() => {});
    logger.warn("test warning");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("error logs without error", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    logger.error("test error");
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });

  it("redacts sensitive keys", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logger.info("auth", { password: "secret123", token: "abc" });
    const call = spy.mock.calls[0]?.[0] as string;
    expect(call).toContain("[REDACTED]");
    expect(call).not.toContain("secret123");
    spy.mockRestore();
  });

  it("includes timestamp in output", () => {
    const spy = vi.spyOn(console, "log").mockImplementation(() => {});
    logger.info("timestamp test");
    const call = spy.mock.calls[0]?.[0] as string;
    expect(call).toMatch(/^\[\d{4}-\d{2}-\d{2}T/);
    spy.mockRestore();
  });
});
