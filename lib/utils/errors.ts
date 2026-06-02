/**
 * Error Handling Utilities
 * Centralized error handling and logging
 */

export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public statusCode: number = 500,
    public isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, "NOT_FOUND", 404);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = "Validation failed") {
    super(message, "VALIDATION_ERROR", 400);
  }
}

/**
 * Log error to console (in development) or error tracking service (in production)
 */
export function logError(error: Error | AppError, context?: Record<string, unknown>) {
  const errorInfo = {
    message: error.message,
    name: error.name,
    stack: error.stack,
    ...(error instanceof AppError && {
      code: error.code,
      statusCode: error.statusCode,
      isOperational: error.isOperational,
    }),
    context,
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === "production") {
    // TODO: Send to error tracking service (Sentry, LogRocket, etc.)
    // Example: Sentry.captureException(error, { extra: context });
    console.error("Production error:", errorInfo);
  } else {
    console.error("Development error:", errorInfo);
  }
}

/**
 * Format error for client display
 * Never expose sensitive error details in production
 */
export function formatErrorForClient(error: Error | AppError): {
  message: string;
  code?: string;
} {
  if (process.env.NODE_ENV === "development") {
    return {
      message: error.message,
      ...(error instanceof AppError && { code: error.code }),
    };
  }

  // In production, only show user-friendly messages
  if (error instanceof AppError && error.isOperational) {
    return {
      message: error.message,
      code: error.code,
    };
  }

  // For unexpected errors, show generic message
  return {
    message: "An unexpected error occurred. Please try again later.",
    code: "INTERNAL_ERROR",
  };
}

/**
 * Handle async errors in API routes
 */
export function asyncHandler(
  fn: (req: Request, res: Response) => Promise<void>
) {
  return async (req: Request, res: Response) => {
    try {
      await fn(req, res);
    } catch (error) {
      logError(error as Error, { path: req.url, method: req.method });
      
      // In Next.js API routes, you would use res.status().json()
      // This is a utility function that can be adapted
      if (error instanceof AppError) {
        // res.status(error.statusCode).json(formatErrorForClient(error));
      } else {
        // res.status(500).json(formatErrorForClient(error as Error));
      }
    }
  };
}

