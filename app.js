//app.js
import express from 'express';
import dotenv from 'dotenv';
import ordersRouter from './routes/orders.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use('/orders', ordersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
