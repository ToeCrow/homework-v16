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

router.put('/:id', (req, res) => {
  const orderId = parseInt(req.params.id);
  const { item, quantity } = req.body

  const order = orders.find( o => o.id === orderId);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  if (item) order.item = item;
  if (quantity) order.quantity = quantity

  res.json({ message: 'Order updated', order});
});

router.delete('/:id', (req, res) => {
  const index = orders.findIndex(o => o.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Order not found'})
  }

  const removedOrder = orders[index];
 
  orders.splice(index, 1);

  res.json({ message: 'Order deleted', removedOrder})
})

export default router;