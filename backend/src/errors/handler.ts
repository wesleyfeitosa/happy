import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface IValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, _next) => {
  if (error instanceof ValidationError) {
    const errors: IValidationErrors = {};

    error.inner.forEach(err => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({ message: 'Validation fails', errors });
  }

  console.log(error);

  return response.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;
