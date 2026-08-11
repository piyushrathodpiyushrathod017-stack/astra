import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  AppError,
  NotFoundError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  ConflictError,
  RateLimitError,
  InternalError,
  handleApiError,
} from "@/lib/errors";

describe("AppError", () => {
  it("creates error with default values", () => {
    const error = new AppError("test", 400);
    expect(error.message).toBe("test");
    expect(error.statusCode).toBe(400);
    expect(error.isOperational).toBe(true);
    expect(error).toBeInstanceOf(Error);
  });

  it("creates non-operational error", () => {
    const error = new AppError("critical", 500, false);
    expect(error.isOperational).toBe(false);
  });
});

describe("NotFoundError", () => {
  it("has 404 status and default message", () => {
    const error = new NotFoundError();
    expect(error.statusCode).toBe(404);
    expect(error.message).toBe("Resource not found");
  });

  it("accepts custom message", () => {
    const error = new NotFoundError("Tool not found");
    expect(error.message).toBe("Tool not found");
  });
});

describe("ValidationError", () => {
  it("has 400 status and error details", () => {
    const errors = { name: ["Required"], email: ["Invalid"] };
    const error = new ValidationError("Invalid input", errors);
    expect(error.statusCode).toBe(400);
    expect(error.errors).toEqual(errors);
  });

  it("has empty errors by default", () => {
    const error = new ValidationError();
    expect(error.errors).toEqual({});
  });
});

describe("UnauthorizedError", () => {
  it("has 401 status", () => {
    const error = new UnauthorizedError();
    expect(error.statusCode).toBe(401);
    expect(error.message).toBe("Unauthorized");
  });
});

describe("ForbiddenError", () => {
  it("has 403 status", () => {
    const error = new ForbiddenError();
    expect(error.statusCode).toBe(403);
    expect(error.message).toBe("Forbidden");
  });
});

describe("ConflictError", () => {
  it("has 409 status", () => {
    const error = new ConflictError();
    expect(error.statusCode).toBe(409);
    expect(error.message).toBe("Resource already exists");
  });
});

describe("RateLimitError", () => {
  it("has 429 status", () => {
    const error = new RateLimitError();
    expect(error.statusCode).toBe(429);
    expect(error.message).toBe("Too many requests");
  });
});

describe("InternalError", () => {
  it("has 500 status and is not operational", () => {
    const error = new InternalError();
    expect(error.statusCode).toBe(500);
    expect(error.isOperational).toBe(false);
  });
});

describe("handleApiError", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("handles AppError correctly", () => {
    const error = new NotFoundError("not here");
    const result = handleApiError(error);
    expect(result.status).toBe(404);
    expect(result.body.error).toBe("not here");
  });

  it("handles ValidationError with details", () => {
    const errors = { field: ["required"] };
    const error = new ValidationError("bad", errors);
    const result = handleApiError(error);
    expect(result.status).toBe(400);
    expect(result.body.error).toBe("bad");
  });

  it("handles unknown errors", () => {
    const result = handleApiError(new Error("unknown"));
    expect(result.status).toBe(500);
    expect(result.body.error).toBe("Internal server error");
  });

  it("logs unhandled errors", () => {
    handleApiError(new Error("test"));
    expect(consoleSpy).toHaveBeenCalled();
  });
});
