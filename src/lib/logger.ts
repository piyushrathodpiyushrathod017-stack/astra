type LogLevel = "info" | "warn" | "error" | "debug";

interface LogContext {
  [key: string]: unknown;
}

function shouldLog(level: LogLevel): boolean {
  const env = process.env.NODE_ENV || "development";
  if (env === "production" && level === "debug") return false;
  return true;
}

function formatLog(level: LogLevel, message: string, context?: LogContext): string {
  const timestamp = new Date().toISOString();
  const env = process.env.NODE_ENV || "development";
  const contextStr = context ? ` ${JSON.stringify(context)}` : "";
  return `[${timestamp}] [${env}] [${level.toUpperCase()}] ${message}${contextStr}`;
}

function sanitize(context: LogContext): LogContext {
  const sensitiveKeys = ["password", "token", "secret", "apiKey", "authorization"];
  const sanitized = { ...context };
  for (const key of Object.keys(sanitized)) {
    if (sensitiveKeys.includes(key.toLowerCase())) {
      sanitized[key] = "[REDACTED]";
    }
  }
  return sanitized;
}

export const logger = {
  info(message: string, context?: LogContext) {
    if (shouldLog("info")) {
      console.log(formatLog("info", message, context ? sanitize(context) : undefined));
    }
  },

  warn(message: string, context?: LogContext) {
    if (shouldLog("warn")) {
      console.warn(formatLog("warn", message, context ? sanitize(context) : undefined));
    }
  },

  error(message: string, context?: LogContext) {
    if (shouldLog("error")) {
      console.error(formatLog("error", message, context ? sanitize(context) : undefined));
    }
  },

  debug(message: string, context?: LogContext) {
    if (shouldLog("debug")) {
      console.debug(formatLog("debug", message, context ? sanitize(context) : undefined));
    }
  },
};
