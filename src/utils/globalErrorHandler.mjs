const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.statusText = err.statusText || 'error';

  res.status(err.statusCode).json({
    status: err.statusText,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

export default globalErrorHandler;
