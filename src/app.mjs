import express from 'express';
import morgan from 'morgan';
import listingRouter from './entities/listing/listingRoutes.mjs';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

app.use('/api/listings', listingRouter);

export default app;
