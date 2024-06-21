import { connect } from 'mongoose';
import app from './src/app.mjs';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});

connect(process.env.DB_URI_LOCAL).then(() => {
  console.log('Successfully connected to database...');
});
