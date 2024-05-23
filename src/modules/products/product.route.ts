import express, { Request, Response } from 'express';
import { Product } from './product.model';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  console.log(req.body);

  // const result = await Product.create(req.body);
});

export const ProductRoutes = router;
