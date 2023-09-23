import express, { Express } from 'express';
import bodyParser from 'body-parser';
import connectDB from './db';

const app: Express = express();

// Middleware
app.use(bodyParser.json());

const startServer = async (): Promise<void> => {
  await connectDB();
  const PORT: number = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
};

// If you want to start the server when this file is run, then add the following:
startServer();
