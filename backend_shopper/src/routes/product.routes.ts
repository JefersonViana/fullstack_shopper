import { Request, Router, Response } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer();

router.get('/', (_req: Request, res: Response) => res.json({ ok: 'products ok (GET)'}));
router.post('/', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
  }
  const resultados: any = [];
  req.file.buffer.toString().split('\n').splice(1).forEach(line => {
    const [productCode, newPrice] = line.split(',');
    const value = Number(newPrice.replace('\r', ''));
    resultados.push({
      productCode: Number(productCode),
      newPrice: isNaN(value) ? 0 : Number(value),
    });
  });
  res.json({ ok: 'products ok (POST)', resultados});
});

export default router;