import express from 'express';
import morgan from 'morgan';
import listingRouter from './entities/listing/listingRoutes.mjs';
import AppError from './utils/AppError.mjs';
import globalErrorHandler from './utils/globalErrorHandler.mjs';
import userRouter from './entities/user/userRoutes.mjs';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.use('/api/listings', listingRouter);
app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
