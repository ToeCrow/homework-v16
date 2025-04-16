import express from 'express';
import products from '../data/products.js';
import categories from '../data/categories.js';

const router = express.Router();


router.get('/:id/categories', (req, res) => {
  const prodId = parseInt(req.params.id);
  const product = products.find(p => p.id === prodId)

  if (!product) {
    return res.status(404).json({ message: 'Product not found!' });
  }

  const category = categories.find(c => c.id === product.categoryId)

  if (!category) {
    return res.status(404).json({ message: 'Category not found!' })
  }

  res.json({ product: product.name, category})
})

export default router