import { Request, Router, Response } from 'express';
import multer from 'multer';

import ProductController from '../controllers/ProductController';
import Validate from '../middlewares/Validate';

const router = Router();
const productController = new ProductController();
const upload = multer();

router.get('/', (req: Request, res: Response) => productController.getAllProducts(req, res));
router.post(
  '/',
  upload.single('file'),
  Validate.validateProducts,
  (req: Request, res: Response) => {
  res.status(200).json(req.body.products);
});

export default router;