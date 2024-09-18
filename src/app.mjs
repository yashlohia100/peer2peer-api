import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import listingRouter from './entities/listing/listingRoutes.mjs';
import AppError from './utils/AppError.mjs';
import globalErrorHandler from './utils/globalErrorHandler.mjs';
import userRouter from './entities/user/userRoutes.mjs';
import cookieParser from 'cookie-parser';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.get('/check-cookie', (req, res) => {
  // Send cookie in headers or make request two times
  console.log(req.cookies);
  res.cookie('send', 'cookie-from-server');
  res.status(200).json({
    status: 'success',
    cookies: req.cookies,
  });
});

app.use('/api/listings', listingRouter);
app.use('/api/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Could not find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
