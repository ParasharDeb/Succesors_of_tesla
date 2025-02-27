import express from 'express';
import { router } from './routes';
import client from '@repo/db'; // Ensure this path is correct
import { userrouter } from './routes/user';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the imported routers
app.use("/api/v1", router);
app.use("/api/v1/users", userrouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT);