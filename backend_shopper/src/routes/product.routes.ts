import { Request, Router, Response } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer();

router.get('/', (_req: Request, res: Response) => res.json({ ok: 'products ok (GET)'}));
router.post('/', upload.single('file'), (req: Request, res: Response) => {
  res.json({ ok: 'products ok (POST)', file: req.file });
});

export default router;