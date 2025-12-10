import express, {
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import morgan from 'morgan';
import errorHandler from './middleware/error.middleware.js';

const app = express();

// Body Parser
app.use(express.json());

// Log all Requests
app.use(morgan('dev'));

// Checks if routing works
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: 'API is running!' });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res
    .status(404)
    .json({ status: 'fail', message: `Route ${req.originalUrl} not found` });
});

// Custom Error Handler
app.use(errorHandler);

export default app;
