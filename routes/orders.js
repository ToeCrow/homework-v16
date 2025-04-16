//routes/orders.js

import express from 'express';

const router = express.Router();

//mockdata
let orders = [
  {id: 1, item: 'T-shirt', quantity: 2},
  {id: 2, item: 'Mössa', quantity: 1}
];

router.get('/', (req, res) => {
  res.json(orders);
});

router.post('/', (req, res) => {
  const newOrder = req.body;
  newOrder.id = orders.length + 1;
  orders.push(newOrder);
  res.status(201).json(newOrder)
});

export default router;