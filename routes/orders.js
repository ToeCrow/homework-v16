//routes/orders.js

import express from 'express';
import orders from '../data/orders.js';
import { readFile, writeFile } from '../helpers/fileHelper.js';


const router = express.Router();

//mockdata
// let orders = [
//   {id: 1, item: 'T-shirt', quantity: 2},
//   {id: 2, item: 'Mössa', quantity: 1}
// ];

router.get('/', (req, res) => {
  res.json(orders);
});

// router.post('/', (req, res) => {
//   const newOrder = req.body;
//   newOrder.id = orders.length + 1;
//   orders.push(newOrder);
//   res.status(201).json(newOrder)
// });

router.post('/', (req, res) => {
  const orders = readFile('orders.json');  // Läs in orders från fil
  const { item, quantity } = req.body;

  const newOrder = {
    id: orders.length + 1,  // Nytt id för den nya ordern
    item,
    quantity,
  };

  orders.push(newOrder);

  // Skriv tillbaka den uppdaterade orders-datan till fil
  writeFile('orders.json', orders);

  res.status(201).json({ message: 'Order added', order: newOrder });
});

router.put('/:id', (req, res) => {
  const orders = readFile('orders.json');  // Läs in orders från fil
  const id = parseInt(req.params.id);
  const { item, quantity } = req.body;

  const order = orders.find(o => o.id === id);
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  if (item) order.item = item;
  if (quantity) order.quantity = quantity;

  // Skriv tillbaka den uppdaterade orders-datan till fil
  writeFile('orders.json', orders);

  res.json({ message: 'Order updated', order });
});

router.delete('/:id', (req, res) => {
  const orders = readFile('orders.json');  // Läs in orders från fil
  const id = parseInt(req.params.id);

  const index = orders.findIndex(o => o.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Order not found' });
  }

  // Ta bort ordern från arrayen
  const deletedOrder = orders.splice(index, 1);

  // Skriv tillbaka den uppdaterade orders-datan till fil
  writeFile('orders.json', orders);

  res.json({ message: 'Order deleted', order: deletedOrder });
});

export default router;