//app.js
import express from 'express';
import dotenv from 'dotenv';
import ordersRouter from './routes/orders.js'
import logRequest from './middleware/logRequest.js';
import categoriesRouter from './routes/categories.js'
import productsRouter from './routes/products.js'
import authenticate from './middleware/auth.js';
import rateLimit from './middleware/rateLimit.js';  

dotenv.config();

const app = express();

app.use(rateLimit);

app.use(logRequest);
app.use(authenticate);

app.use(express.json());
app.use('/orders', ordersRouter);
app.use('/categories', categoriesRouter)
app.use('/products', productsRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
