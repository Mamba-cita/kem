import path from 'path';
import express from "express";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from './config/db.js';

const port = process.env.PORT || 5000;

import userRoutes from './routes/userRoutes.js';

connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Middleware to parse cookies
app.use(cookieParser());

app.use('/api/users', userRoutes);


// if(process.env.NODE_ENV === 'production'){
//     const __dirname = path.resolve();
//     app.use(express.static(path.join(__dirname, 'frontend', 'dist')));
//     app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
    
// } else {
//     app.get('/', (req, res) => res.send('Server is running in development mode'));
// }
app.get('/', (req, res) => res.send('Server is running in development mode'));

// Middleware for handling 404 errors
app.use(notFound);
// Middleware for handling other errors
app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));
